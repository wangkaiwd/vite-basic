import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import pkg from './package.json';
import {requireResolve} from './config/utils';

const objectKeys = <T extends object>(object: T): (keyof T)[] => {
	return Object.keys(object) as (keyof T)[];
};

type Dependencies = typeof pkg.dependencies
type Memo = {
	[k in keyof Dependencies]: string[]
}

const chunkGroups = objectKeys(pkg.dependencies).reduce((memo, dep) => {
	memo[dep] = [requireResolve(dep)];
	return memo;
}, {} as Memo);

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	build: {
		rollupOptions: {
			output: {
				// sourcemap: true,
				// manualChunks
			}
		}
	}
});

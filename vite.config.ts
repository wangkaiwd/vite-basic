import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import pkg from './package.json';

const manualChunksDeps = Object.keys(pkg.dependencies).reduce((memo, dep) => {
	memo[dep] = [dep];
	return memo;
}, {});
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
				// manualChunks: manualChunksDeps
			}
		}
	}
});

import {defineConfig} from 'rollup';
import typescript from '@rollup/plugin-typescript';
import myExample from './plugins/simple-plugin';

export default defineConfig({
	input: ['./index.ts'],
	output: {
		file: 'dist/index.js',
		format: 'es'
	},
	plugins: [
		typescript(),
		myExample()
	]
});

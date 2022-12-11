import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {splitVendorChunkPlugin} from 'vite';
// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
	plugins: [
		react(),
		splitVendorChunkPlugin()
	],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
});

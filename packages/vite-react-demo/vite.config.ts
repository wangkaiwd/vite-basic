import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { splitVendorChunkPlugin } from 'vite';
import Inspect from 'vite-plugin-inspect';
import myPlugin from './config/simple';
import virtualModule from './config/virtual-module';
import svgr from './config/svgr';

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    Inspect(),
    myPlugin(),
    virtualModule(),
    svgr()
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});

import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import alias from './plugins/alias';
import path from 'node:path';
import url from 'node:url';
import image from './plugins/image';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
export default defineConfig({
  input: ['./index.ts'],
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  plugins: [
    typescript(),
    alias({
      '@': path.resolve(__dirname, './src')
    }),
    image()
  ]
});

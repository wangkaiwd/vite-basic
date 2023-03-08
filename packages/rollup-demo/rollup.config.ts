import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import alias from './plugins/alias';
import path from 'node:path';
import url from 'node:url';
import image from './plugins/image';
import replace from './plugins/replace';
import html from './plugins/html';

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
    image(),
    // Why need JSON.stringify:
    // 1. replace matched string with new string, so 'dev' will become a variable
    // 2. "'dev'" in code string is 'dev' which is string in source code
    replace({ MODE: 'dev' }),
    html()
  ]
});

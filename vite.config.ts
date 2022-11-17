import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
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
      manualChunks (id) {
        const reg = /node_modules/;
        if (reg.test(id)) {
          return 'vendor';
        }
      }
    }
  }
});

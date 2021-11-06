import path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '',
  plugins: [svelte()],
  optimizeDeps: {
    exclude: []
  },
  resolve: {
    alias: {
      '@img': path.resolve('./src/assets/img'),
      '@fonts': path.resolve('./src/assets/fonts'),
      '@stores': path.resolve('./src/stores'),
      '@helpers': path.resolve('./src/helpers')
    }
  }
});

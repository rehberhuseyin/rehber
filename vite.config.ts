import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // GitHub Pages'de alt dizinlerde çalışabilmesi için kritik ayar
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
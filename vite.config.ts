import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@models': resolve(__dirname, './src/models/'),
      '@constants': resolve(__dirname, './src/constants/'),
      '@utils': resolve(__dirname, './src/utils/'),
      '@services': resolve(__dirname, './src/services/'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 4500,
    open: true,
  },
});

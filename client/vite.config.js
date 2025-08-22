import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This forwards any request starting with /api to your backend server
      '/api': {
        target: 'https://myportfolio-myud.onrender.com', // Your backend server URL
        changeOrigin: true,
      },
    },
  },
});

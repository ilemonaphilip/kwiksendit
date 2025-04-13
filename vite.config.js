import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '', // Using empty base as in your previous working project
  server: {
    port: 5175,
  },
});

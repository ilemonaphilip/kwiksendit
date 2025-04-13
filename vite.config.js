import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // For development, we use the root base. For production (e.g., GitHub Pages), update accordingly.
  base: '/',
  plugins: [react()],
});

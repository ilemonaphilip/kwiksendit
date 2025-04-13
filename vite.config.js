import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // For a project site with repository name 'kwiksendit'
  base: '/kwiksendit/',
  server: {
    port: 5175,
  },
});

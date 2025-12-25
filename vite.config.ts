
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';

// vite.config.ts is executed in a Node.js environment during build/dev. 
// Explicitly importing process from node:process ensures TypeScript identifies the 
// Node.js process object and its associated methods like cwd().
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY)
    },
    server: {
      port: 5173,
      host: true
    }
  };
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';


dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Set the base path to '/'
  plugins: [react()],
  server: {
    port: process.env.VITE_PORT || 3000, // Use port 7000 from .env or fallback to 3000
  },
})
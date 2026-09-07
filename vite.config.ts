import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path/win32'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Investment-Bank/',  // ← This must match your repo name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
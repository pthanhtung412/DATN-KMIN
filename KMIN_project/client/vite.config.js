import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Proxy cho các yêu cầu bắt đầu với "/api"
    }
  },
  build: {
    sourcemap: true // Bật source maps
  }
})

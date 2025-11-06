import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: [
      'debit-card-flip.onrender.com',
      '.onrender.com'
    ]
  }
})

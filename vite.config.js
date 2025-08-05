import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/title-05.08/',      // ← имя вашего репозитория
  plugins: [react()],
})

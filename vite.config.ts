import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/12e-2023-24-todo-app/", 
  plugins: [react()],
})

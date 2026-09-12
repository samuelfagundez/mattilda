import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Nombre del repo en GitHub Pages -> https://samuelfagundez.github.io/mattilda/
const BASE = process.env.VITE_BASE ?? '/mattilda/'

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
})

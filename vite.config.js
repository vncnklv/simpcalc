import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/simpcalc/",
  build: {
    outDir: 'build', // Change this to your desired output directory
  }
})
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = (relative: string) => fileURLToPath(new URL(relative, import.meta.url))

// Każda podstrona to osobny plik HTML. Nowa podstrona = nowy wpis w `input`.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path('./src') },
  },
  build: {
    rollupOptions: {
      input: {
        home: path('./index.html'),
        contact: path('./kontakt/index.html'),
        privacy: path('./polityka-prywatnosci/index.html'),
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
// export default defineConfig({
//   root: "./src",
//   plugins: [react()]
// })

export default {
  root: "./src",
  rollupOptions: {
    input: 'wasedatime-career.ts',
    format: 'system',
    preserveEntrySignatures: true
  },
  plugins: [react(), dynamicImport()],
}
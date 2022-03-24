import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      name: 'suitcase',
      entry: resolve(__dirname, './src/index.ts'),
      fileName: (format) => `index.${format}.js`
    }
  }
})
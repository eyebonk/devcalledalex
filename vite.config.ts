import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
      '@models': fileURLToPath(new URL('./src/models', import.meta.url)),
      '@config': fileURLToPath(new URL('./src/config', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function defineApplicationConfig() {
  return defineConfig({
    plugins: [vue()],
  })
}

export { defineApplicationConfig }

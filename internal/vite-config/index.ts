import { defineConfig as viteDefineConfig } from 'vite'
import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default function defineConfig(): UserConfig {
  return viteDefineConfig({
    plugins: [vue()],
  })
}

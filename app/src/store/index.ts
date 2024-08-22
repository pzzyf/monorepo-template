import { createPinia } from 'pinia'
import type { App } from 'vue'

export async function initStores(app: App) {
  const { createPersistedState } = await import('pinia-plugin-persistedstate')
  const pinia = createPinia()
  pinia.use(createPersistedState({
    storage: localStorage,
  }),
  )
  app.use(pinia)
  return pinia
}

export * from './modules'

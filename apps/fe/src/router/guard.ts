import type { Router } from 'vue-router'
import { startProgress, stopProgress } from '@afe1/utils'

function setupCommonGuard(router: Router) {
  const loadedPaths = new Set<string>()

  router.beforeEach((to) => {
    to.meta.loaded = loadedPaths.has(to.path)

    if (!to.meta.loaded) {
      startProgress()
    }
  })
  router.afterEach((to) => {
    loadedPaths.add(to.path)
    stopProgress()
  })
}

function createRouterGuard(router: Router) {
  setupCommonGuard(router)
}

export { createRouterGuard }

import type { Router } from 'vue-router'
import { preferences } from '@afe1/preferences'
import { startProgress, stopProgress } from '@afe1/utils'

function setupCommonGuard(router: Router) {
  const loadedPaths = new Set<string>()

  router.beforeEach((to) => {
    to.meta.loaded = loadedPaths.has(to.path)

    if (!to.meta.loaded && preferences.transition.progress) {
      startProgress()
    }
  })
  router.afterEach((to) => {
    loadedPaths.add(to.path)
    if (preferences.transition.progress) {
      stopProgress()
    }
  })
}

function createRouterGuard(router: Router) {
  setupCommonGuard(router)
}

export { createRouterGuard }

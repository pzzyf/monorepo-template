import type { Router } from 'vue-router'
import { LOGIN_PATH } from '@afe1/constants'
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

function setupAccessGuard(router: Router) {
  router.beforeEach((to) => {
    if (to.fullPath !== LOGIN_PATH) {
      return {
        path: LOGIN_PATH,
        replace: true,
      }
    }
  })
}

function createRouterGuard(router: Router) {
  setupCommonGuard(router)
  setupAccessGuard(router)
}

export { createRouterGuard }

import type { Router } from 'vue-router'
import { startProgress, stopProgress } from '@afe1/utils'

function commonGuard(router: Router) {
  router.beforeEach(() => {
    startProgress()
  })
  router.afterEach(() => {
    stopProgress()
  })
}

function createRouterGuard(router: Router) {
  commonGuard(router)
}

export { createRouterGuard }

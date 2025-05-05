import type { Router } from 'vue-router'

function commonGuard(router: Router) {
  router.beforeEach((to) => {
    if (to.path === '/home') {
      return {
        path: '/login',
      }
    }
  })
}

function createRouterGuard(router: Router) {
  commonGuard(router)
}

export { createRouterGuard }

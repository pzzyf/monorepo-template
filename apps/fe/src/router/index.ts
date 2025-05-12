import { createRouter, createWebHistory } from 'vue-router'

import { createRouterGuard } from './guard'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createRouterGuard(router)

export { router }

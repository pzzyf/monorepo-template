import type { RouteRecordRaw } from 'vue-router'
import { coreRoutes } from './core'

const routes: RouteRecordRaw[] = [
  ...coreRoutes,
]

export { routes }

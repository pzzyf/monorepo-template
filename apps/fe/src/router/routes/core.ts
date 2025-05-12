import type { RouteRecordRaw } from 'vue-router'
import { LOGIN_PATH } from '@afe1/constants'
import { preferences } from '@afe1/preferences'

const BasicLayout = () => import('#/layouts/base.vue')
const AuthPageLogin = () => import('#/layouts/auth.vue')

const coreRoutes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    name: 'Root',
    path: '/',
    redirect: preferences.app.defaultHomePath,
    children: [],
  },
  {
    component: AuthPageLogin,
    name: 'Authentication',
    path: '/auth',
    redirect: LOGIN_PATH,
    children: [
      {
        name: 'Login',
        path: 'login',
        component: import('#/views/_core/authentication/login.vue'),
      },
    ],
  },
  // {
  //   component: import('#/views/dashboard/analytics/index.vue'),
  //   name: 'Analytics',
  //   path: '/analytics',
  // },
]

export { coreRoutes }

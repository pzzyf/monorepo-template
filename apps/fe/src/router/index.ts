import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'

import Login from '../views/login/index.vue'
import { createRouterGuard } from './guard'

const routes = [
  { path: '/', redirect: 'home' },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createRouterGuard(router)

export { router }

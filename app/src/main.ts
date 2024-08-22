import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import { initStores } from '@/store'

async function bootstrap() {
  const app = createApp(App)

  await initStores(app)

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        redirect: '/home',
        children: [
          {
            path: '/home',
            component: () => import('./pages/index.vue'),
          },
        ],
      },
    ],
  })

  app.use(router)

  app.mount('#app')
}

bootstrap()

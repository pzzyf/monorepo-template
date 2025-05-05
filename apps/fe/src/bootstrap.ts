import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './style.css'

function bootStrap() {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
}

export { bootStrap }

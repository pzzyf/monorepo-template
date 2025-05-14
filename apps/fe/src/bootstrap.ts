import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import '@afe1/styles'
import 'ant-design-vue/dist/reset.css'

function bootStrap() {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
}

export { bootStrap }

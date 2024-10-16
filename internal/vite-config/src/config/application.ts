import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function defineApplicationConfig(userConfigPromise?: any) {
  return defineConfig(async () => {

    const option = await userConfigPromise

    console.log(option);

    return {
      plugins: [vue()]
    }

  })
}

export { defineApplicationConfig }

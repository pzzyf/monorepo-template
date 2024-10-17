import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadAndConvertEnv } from '../utils/env'

function defineApplicationConfig(userConfigPromise?: any) {
  return defineConfig(async (config) => {

    const option = await userConfigPromise?.(config)

    const test = await loadAndConvertEnv()

    console.log(option);

    console.log(test);


    return {
      plugins: [vue()]
    }

  })
}

export { defineApplicationConfig }

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadAndConvertEnv } from '../utils/env'
import { getCommonConfig } from './common'
import { mergeConfig } from 'vite'

function defineApplicationConfig(userConfigPromise?: any) {
  return defineConfig(async (config) => {

    const options = await userConfigPromise?.(config)

    const { port } = await loadAndConvertEnv()

    const { vite = {} } = options || {};


    const applicationConfig = {
      plugins: [vue()],
      server: {
        host: true,
        port
      }
    }

    const mergedCommonConfig = mergeConfig(await getCommonConfig(), applicationConfig)

    return mergeConfig(mergedCommonConfig, vite);


  })
}

export { defineApplicationConfig }

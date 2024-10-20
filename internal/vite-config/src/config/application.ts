import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadAndConvertEnv } from '../utils/env'
import { getCommonConfig } from './common'
import { mergeConfig } from 'vite'
import type { UserConfig } from 'vite'

function defineApplicationConfig(userConfigPromise?: any) {
  return defineConfig(async (config) => {

    const options = await userConfigPromise?.(config)

    const { base, port } = await loadAndConvertEnv()

    const { vite = {} } = options || {};

    const { command } = config

    const isBuild = command === 'build';


    const applicationConfig: UserConfig = {
      base,
      build: {
        rollupOptions: {
          output: {
            assetFileNames: '[ext]/[name]-[hash].[ext]',
            chunkFileNames: 'js/[name]-[hash].mjs',
            entryFileNames: 'jse/index-[name]-[hash].mjs',
          },
        },
        target: 'es2015',
      },
      esbuild: {
        drop: isBuild ? ['debugger'] : [],
        legalComments: 'none',
      },
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

import type { UserConfig } from 'vite'
import { defineConfig, loadEnv, mergeConfig } from 'vite'
import { loadApplicationPlugins } from '../plugins'
import { loadAndConvertEnv } from '../utils/env'
import { getCommonConfig } from './common'

function defineApplicationConfig(userConfigPromise?: any) {
  return defineConfig(async (config) => {
    const options = await userConfigPromise?.(config)

    const { base, port, ...envConfig } = await loadAndConvertEnv()

    const { vite = {}, application = {} } = options || {}

    const { command, mode } = config

    const isBuild = command === 'build'

    const root = process.cwd()
    const env = loadEnv(mode, root)

    const plugins = await loadApplicationPlugins({
      archiver: true,
      archiverPluginOptions: {},
      compress: false,
      compressTypes: ['brotli', 'gzip'],
      devtools: true,
      env,
      extraAppConfig: true,
      html: true,
      i18n: true,
      injectAppLoading: true,
      injectMetadata: true,
      isBuild,
      license: true,
      mode,
      nitroMock: !isBuild,
      nitroMockOptions: {},
      print: !isBuild,
      pwa: true,
      vxeTableLazyImport: true,
      ...envConfig,
      ...application,
    })

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
      plugins,
      server: {
        host: true,
        port,
        warmup: {
          // 预热文件
          clientFiles: [
            './index.html',
            './src/bootstrap.ts',
            './src/{views,layouts,router,store,api}/*',
          ],
        },
      },
    }

    const mergedCommonConfig = mergeConfig(await getCommonConfig(), applicationConfig)

    return mergeConfig(mergedCommonConfig, vite)
  })
}

export { defineApplicationConfig }

import type { PluginOption } from 'vite'
import type { ApplicationPluginOptions,CommonPluginOptions,ConditionPlugin } from '../typing'
import viteVue from '@vitejs/plugin-vue'
import viteVueJsx from '@vitejs/plugin-vue-jsx'
import viteVueDevTools from 'vite-plugin-vue-devtools'
// import { viteMetadataPlugin } from './inject-metadata'



async function loadCommonPlugins(options: CommonPluginOptions): Promise<ConditionPlugin[]> {

  const { isBuild, devtools } = options
  return [
    {
      condition: true,
      plugins: () => [
        viteVue({
          script: {
            defineModel: true,
          },
        }),
        viteVueJsx(),
      ],
    },
    {
      condition: !isBuild && devtools,
      plugins: () => [viteVueDevTools()],
    },
    // {
    //   condition: injectMetadata,
    //   plugins: async () =>  [await viteMetadataPlugin()],
    // }
  ]
}

async function loadApplicationPlugins(options:ApplicationPluginOptions): Promise<PluginOption[]> {


  const {
    archiver,
    archiverPluginOptions,
    compress,
    compressTypes,
    ...commonOptions
  } = options

  const commonPlugins = await loadCommonPlugins(commonOptions)

  return [
    ...commonPlugins
  ]
}

export { loadApplicationPlugins }

import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [{
    input: './eslint.config.mjs',
    name: 'index',
  }],
})

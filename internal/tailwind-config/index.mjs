import path from 'node:path'
import process from 'node:process'

import { getPackagesSync } from '@manypkg/get-packages'

const { packages } = getPackagesSync(process.cwd())

const tailwindPackages = []

packages.forEach((pkg) => {
  tailwindPackages.push(pkg.dir)
})

export default {
  content: [
    './index.html',
    ...tailwindPackages.map(item =>
      path.join(item, 'src/**/*.{vue,js,ts,jsx,tsx,svelte,astro,html}'),
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

import path from 'node:path'
import process from 'node:process'

import { getPackagesSync } from '@manypkg/get-packages'

const { packages } = getPackagesSync(process.cwd())

const tailwindPackages: string[] = []

packages.forEach((pkg) => {
  tailwindPackages.push(pkg.dir)
})

const shadcnUiColors = {
  primary: {
    ...createColorsPalette('primary'),
    DEFAULT: 'hsl(var(--primary))',
  },
  background: {
    deep: 'hsl(var(--background-deep))',
    DEFAULT: 'hsl(var(--background))',
  },
}

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
  colors: { ...shadcnUiColors },
  plugins: [],
}

function createColorsPalette(name: string) {
  return {
    '50': `hsl(var(--${name}-50))`,
    '100': `hsl(var(--${name}-100))`,
    '200': `hsl(var(--${name}-200))`,
    '300': `hsl(var(--${name}-300))`,
    '400': `hsl(var(--${name}-400))`,
    '500': `hsl(var(--${name}-500))`,
    '600': `hsl(var(--${name}-600))`,
    '700': `hsl(var(--${name}-700))`,
    // 800: `hsl(var(--${name}-800))`,
    // 900: `hsl(var(--${name}-900))`,
    // 950: `hsl(var(--${name}-950))`,
    // 激活状态下的颜色，适用于按钮按下时的背景色或边框色。
    'active': `hsl(var(--${name}-700))`,
    // 浅色背景，适用于输入框或表单区域的背景。
    'background-light': `hsl(var(--${name}-200))`,
    // 适用于略浅的背景色，通常用于次要背景或略浅的区域。
    'background-lighter': `hsl(var(--${name}-100))`,
    // 最浅的背景色，适用于非常轻微的阴影或卡片的背景。
    'background-lightest': `hsl(var(--${name}-50))`,
    // 适用于普通边框，可能用于按钮或卡片的边框。
    'border': `hsl(var(--${name}-400))`,
    // 浅色边框，适用于输入框或卡片的边框。
    'border-light': `hsl(var(--${name}-300))`,
    'foreground': `hsl(var(--${name}-foreground))`,
    // 鼠标悬停状态下的颜色，适用于按钮悬停时的背景色或边框色。
    'hover': `hsl(var(--${name}-600))`,
    // 主色文本
    'text': `hsl(var(--${name}-500))`,
    // 主色文本激活态
    'text-active': `hsl(var(--${name}-700))`,
    // 主色文本悬浮态
    'text-hover': `hsl(var(--${name}-600))`,
  }
}

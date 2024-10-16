import { existsSync } from "node:fs";
import { defineApplicationConfig } from "./application";
import { join } from 'node:path'

function defineConfig(
  useConfigPromise?: any,
  type: 'application' | 'library' | 'auto' = 'auto'
) {

  let projectType = type

  if (projectType == 'auto') {
    const htmlPath = join(process.cwd(), 'index.html')
    projectType = existsSync(htmlPath) ? 'application' : 'library'
  }

  switch (projectType) {
    case 'application': {
      return defineApplicationConfig(useConfigPromise)
    }
    default: {
      throw new Error(`Unsupported project type: ${projectType}`);
    }
  }
}

export { defineConfig }

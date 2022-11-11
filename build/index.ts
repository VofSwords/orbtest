import { build } from 'esbuild'
import { copyFile } from 'node:fs/promises'

const libBuild = build({
  entryPoints: ['./src/index.ts'],
  outfile: './dist/index.js',
  bundle: true,
  platform: 'node',
  tsconfig: './src/tsconfig.json',
})

const cliModulesBuild = build({
  entryPoints: ['./src/cli/modules.ts'],
  outfile: './dist/cli/modules.js',
  bundle: true,
  platform: 'node',
  tsconfig: './src/tsconfig.json',
})

const cliBuild = build({
  entryPoints: ['./src/cli/index.ts'],
  outfile: './dist/cli/index.js',
  format: 'cjs',
  tsconfig: './src/tsconfig.json',
})

copyFile('src/static/osodeploy', 'dist/osodeploy')
copyFile('src/static/package.json', 'dist/package.json')

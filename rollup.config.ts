// https://qiita.com/munieru_jp/items/036f047441466642740a

import terserModule from '@rollup/plugin-terser'
import typescriptModule from '@rollup/plugin-typescript'
import { globSync } from 'glob'
import type { RollupOptions } from 'rollup'
import bookmarkletModule from 'rollup-plugin-bookmarklet'

// NOTE: workaround until this PR is merged: https://github.com/rollup/plugins/pull/1578
const terser = (terserModule as unknown as typeof terserModule['default'])
const typescript = (typescriptModule as unknown as typeof typescriptModule['default'])
const bookmarklet = (bookmarkletModule as unknown as typeof bookmarkletModule['default'])

const entryPaths = globSync('src/**/main.ts')
const configs: RollupOptions[] = entryPaths.map(entryPath => ({
  input: entryPath,
  output: {
    file: entryPath.replace(/^src\//, 'dist/').replace(/\/(.+)\/main\.ts$/, '/$1.min.js'),
    format: 'iife'
  },
  plugins: [
    typescript(),
    terser(),
    bookmarklet()
  ]
}))

export default configs

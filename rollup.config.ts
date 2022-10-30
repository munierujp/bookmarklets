import typescript from '@rollup/plugin-typescript'
import glob from 'glob'
import type { RollupOptions } from 'rollup'
import { terser } from 'rollup-plugin-terser'
import watch from 'rollup-plugin-watch'
import bookmarklet from './plugins/bookmarklet'

const entryPaths = glob.sync('src/**/main.ts')
const configs: RollupOptions[] = entryPaths.map(entryPath => ({
  input: entryPath,
  output: {
    file: entryPath.replace(/^src\//, 'dist/').replace(/\/(.+)\/main\.ts$/, '/$1.min.js'),
    format: 'iife'
  },
  plugins: [
    typescript(),
    terser(),
    bookmarklet(),
    watch({
      dir: 'src'
    })
  ]
}))

export default configs

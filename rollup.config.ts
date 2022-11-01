import typescript from '@rollup/plugin-typescript'
import glob from 'glob'
import type { RollupOptions } from 'rollup'
import { terser } from 'rollup-plugin-terser'
import watch from 'rollup-plugin-watch'
import bookmarklet from './plugins/bookmarklet'

const entryPaths = glob.sync('src/**/main.ts')
const configs: RollupOptions[] = entryPaths.flatMap(entryPath => {
  const mainConfig: RollupOptions = {
    input: entryPath,
    output: {
      file: entryPath.replace(/^src\//, 'dist/').replace(/\/(.+)\/main\.ts$/, '/$1.js'),
      format: 'iife'
    },
    plugins: [
      typescript(),
      bookmarklet(),
      watch({
        dir: 'src'
      })
    ]
  }
  const minConfig: RollupOptions = {
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
  }
  return [
    mainConfig,
    minConfig
  ]
})

export default configs

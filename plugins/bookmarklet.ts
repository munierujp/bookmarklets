import type { Plugin } from 'rollup'

/**
 * Rollup plugin for bookmarklet.
 * Add `javascript:` prefix to code on renderChunk hook.
 */
const bookmarklet = (): Plugin => {
  return {
    name: 'bookmarklet',
    renderChunk: (code) => {
      return {
        code: `javascript:${code}`
      }
    }
  }
}

export default bookmarklet

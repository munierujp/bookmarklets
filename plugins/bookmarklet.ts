import type { Plugin } from 'rollup'

const bookmarklet = (): Plugin => {
  return {
    name: 'bookmarklet',
    renderChunk: (code) => {
      return {
        code: `javascript: ${code}`
      }
    }
  }
}

export default bookmarklet

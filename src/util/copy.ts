/**
 * Copy text to clipboard.
 * @param text - text to copy
 */
export const copy = (text: string): void => {
  const textarea = document.createElement('textarea')
  textarea.textContent = text
  document.body.append(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
}

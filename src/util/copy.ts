/**
 * Copy text to clipboard.
 * @param text - text to copy
 */
export const copy = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text)
}

const params = new URLSearchParams({
  text: `${document.title} ${location.href}`
})
const url = `https://twitter.com/intent/tweet?${params.toString()}`
const width = 550
const height = 420
const features = Object.entries({
  width,
  height,
  top: (screen.height - height) / 2,
  left: (screen.width - width) / 2
})
  .map(([key, value]) => `${key}=${value}`)
  .join(',')
window.open(url, '_blank', features)

import {
  copy,
  handleError
} from '../util'

copy(`[${document.title}](${location.href})`).catch(handleError)

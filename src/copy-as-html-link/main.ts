import {
  copy,
  handleError
} from '../util'

copy(`<a href="${location.href}">${document.title}</a>`).catch(handleError)

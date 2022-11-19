import {
  copy,
  handleError
} from '../util'

copy(`${document.title}\n${location.href}`).catch(handleError)

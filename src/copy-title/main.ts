import {
  copy,
  handleError
} from '../util'

copy(document.title).catch(handleError)

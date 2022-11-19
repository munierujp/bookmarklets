import {
  copy,
  handleError
} from '../util'

copy(location.href).catch(handleError)

import { copy } from '../util/copy.js'
import { handleError } from '../util/handleError.js'

copy(`<a href="${location.href}">${document.title}</a>`).catch(handleError)

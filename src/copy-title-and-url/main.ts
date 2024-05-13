import { copy } from '../util/copy.js'
import { handleError } from '../util/handleError.js'

copy(`${document.title}\n${location.href}`).catch(handleError)

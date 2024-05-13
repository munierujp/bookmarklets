import { copy } from '../util/copy.js'
import { handleError } from '../util/handleError.js'

copy(document.title).catch(handleError)

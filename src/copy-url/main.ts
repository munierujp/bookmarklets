import { copy } from '../util/copy.js'
import { handleError } from '../util/handleError.js'

copy(location.href).catch(handleError)

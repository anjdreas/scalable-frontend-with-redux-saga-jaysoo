import { identity } from 'ramda'
import * as actions from './actions'
import saga from './saga'

// Creates a task descriptor
const create = (fn) => ({ pipe: [fn] })

// Pipes task descriptors
const pipe = (...ds) => ds.reduce((piped, d) => {
  piped.pipe = piped.pipe.concat(d.pipe)
  return piped
}, { pipe: [] })

export
  { actions
  , saga
  , create
  , pipe
  }

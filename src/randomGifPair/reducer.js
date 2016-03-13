import update from 'react/lib/update'
import { combineReducers } from 'redux'
import * as randomGif from '../randomGif'
import { NEW_GIF, PENDING } from './actions'

export const initialState =
  { left: { [randomGif.name]: randomGif.Model.Empty('futurama') }
  , right: { [randomGif.name]: randomGif.Model.Empty('adventure time') }
  }

export default (state = initialState, action) => {
  const { type, payload: { side, url } = {} } = action
  switch (type) {
    case NEW_GIF:
      return update(state, {
        [side]: {
          [randomGif.name]: {
            $set: randomGif.reducer( state[side][randomGif.name]
                                   , randomGif.actions.newGif(url)
            )
          }
        }
      })
    case PENDING:
      return update(state, {
        [side]: {
          [randomGif.name]: {
            $set: randomGif.reducer( state[side][randomGif.name]
                                   , randomGif.actions.pending()
            )
          }
        }
      })
    default:
      return state
  }
}
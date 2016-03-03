import update from 'react/lib/update'
import { combineReducers } from 'redux'
import * as randomGif from '../randomGif'
import { NEW_GIF_LEFT, PENDING_LEFT, NEW_GIF_RIGHT, PENDING_RIGHT } from './actions'

export const initialState =
  { left: { [randomGif.name]: randomGif.Model.Empty('futurama') }
  , right: { [randomGif.name]: randomGif.Model.Empty('adventure time') }
  }

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case NEW_GIF_LEFT:
      return update(state, {
        left: {
          [randomGif.name]: {
            $set: randomGif.reducer( state.left[randomGif.name]
                                   , randomGif.actions.newGif(payload)
            )
          }
        }
      })
    case PENDING_LEFT:
      return update(state, {
        left: {
          [randomGif.name]: {
            $set: randomGif.reducer( state.left[randomGif.name]
                                   , randomGif.actions.pending()
            )
          }
        }
      })
    case NEW_GIF_RIGHT:
      return update(state, {
        right: {
          [randomGif.name]: {
            $set: randomGif.reducer( state.right[randomGif.name]
                                   , randomGif.actions.newGif(payload)
            )
          }
        }
      })
    case PENDING_RIGHT:
      return update(state, {
        right: {
          [randomGif.name]: {
            $set: randomGif.reducer( state.right[randomGif.name]
                                   , randomGif.actions.pending()
            )
          }
        }
      })
    default:
      return state
  }
}
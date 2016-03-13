import update from 'react/lib/update'
import { combineReducers } from 'redux'
import * as randomGif from '../randomGif'
import { ADD, CHANGE_TOPIC, NEW_GIF, PENDING } from './actions'

export const initialState =
  { topic: 'simpsons'
  , gifs: []
  }

export default (state = initialState, action) => {
  const { type, payload: { id, url, topic } = {} } = action
  switch (type) {
    case ADD:
      return update(state, {
        gifs: {
          $push: [
            { id: state.gifs.length
            , [randomGif.name]: randomGif.Model.Empty(topic)
            }
          ]
        }
      })
    case CHANGE_TOPIC:
      return update(state, {
        topic: { $set: topic }
      })
    case NEW_GIF:
      return update(state, {
        gifs: {
          [id]: {
            [randomGif.name]: {
              $set: randomGif.reducer( state.gifs[id][randomGif.name]
                                     , randomGif.actions.newGif(url)
              )
            }
          }
        }
      })
    case PENDING:
      return update(state, {
        gifs: {
          [id]: {
            [randomGif.name]: {
              $set: randomGif.reducer( state.gifs[id][randomGif.name]
                                     , randomGif.actions.pending()
              )
            }
          }
        }
      })
    default:
      return state
  }
}
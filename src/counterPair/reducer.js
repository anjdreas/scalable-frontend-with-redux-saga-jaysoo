import { combineReducers } from 'redux'
import * as counter from '../counter'
import { INC_FIRST, DEC_FIRST, INC_SECOND, DEC_SECOND } from './actions'

export const initialState =
  { first: { [counter.name]: counter.initialState }
  , second: { [counter.name]: counter.initialState }
  }

export default (state = initialState, action) => {
  switch (action.type) {
    case INC_FIRST:
      return { ...state, first: {
        [counter.name]: counter.reducer(state.first[counter.name], counter.actions.inc())
      } }
    case DEC_FIRST:
      return { ...state, first: {
        [counter.name]: counter.reducer(state.first[counter.name], counter.actions.dec())
      } }
    case INC_SECOND:
      return { ...state, second: {
        [counter.name]: counter.reducer(state.second[counter.name], counter.actions.inc())
      } }
    case DEC_SECOND:
      return { ...state, second: {
        [counter.name]: counter.reducer(state.second[counter.name], counter.actions.dec())
      } }
    default:
      return state
  }
}
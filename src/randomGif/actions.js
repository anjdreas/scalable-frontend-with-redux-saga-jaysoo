import { kAction } from '../utils'
import { run } from '../tasks'
import { name } from './__init__'
import { fetchRandomGif }  from './tasks'

export const NEW_GIF = `${name}/NEW_GIF`
export const REQUEST_MORE = `${name}/REQUEST_MORE`
export const PENDING = `${name}/PENDING`

export const newGif = url => ({ type: NEW_GIF, payload: url })

export const requestMore = topic => {
  return dispatch => {
    dispatch(run(NEW_GIF, NEW_GIF, fetchRandomGif, topic))
  }
}

export const pending = kAction(PENDING)

import { kAction } from '../utils'
import { create, pipe, run } from '../tasks'
import * as randomGif from '../randomGif'
import { name } from './__init__'

export const NEW_GIF = `${name}/NEW_GIF`
export const REQUEST_MORE = `${name}/REQUEST_MORE`
export const PENDING = `${name}/PENDING`

const withPosition = position => create(async (url) => ({ url, position }))
const fetchRandomGifWithPosition = position =>
  pipe(randomGif.tasks.fetchRandomGif, withPosition(position))

export const requestMore = ({position, topic}) => {
  return dispatch =>
    dispatch(run(NEW_GIF, NEW_GIF, fetchRandomGifWithPosition(position), topic))
}

export const pending = ({position}) => ({ type: PENDING, payload: {position} })

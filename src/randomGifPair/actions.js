import { kAction } from '../utils'
import { create, pipe, run } from '../tasks'
import * as randomGif from '../randomGif'
import { name } from './__init__'

const withSide = side => create(async (url) => ({ side, url }))
const fetchRandomGifWithSide = side => pipe(randomGif.tasks.fetchRandomGif, withSide(side))

export const NEW_GIF = `${name}/NEW_GIF`
export const REQUEST_MORE = `${name}/REQUEST_MORE`
export const PENDING = `${name}/PENDING`

export const newGif = ({side, url}) => ({ type: NEW_GIF, payload: { side, url } })

export const requestMore = ({side, topic}) => {
  return dispatch =>
    dispatch(run(NEW_GIF, NEW_GIF, fetchRandomGifWithSide(side), topic))
}

export const pending = ({side}) => ({ type: PENDING, payload: {side} })

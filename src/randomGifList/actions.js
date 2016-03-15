import { kAction } from '../utils'
import { create, pipe, run } from '../tasks'
import * as randomGif from '../randomGif'
import { name } from './__init__'

export const ADD = `${name}/ADD`
export const CHANGE_TOPIC = `${name}/CHANGE_TOPIC`
export const NEW_GIF = `${name}/NEW_GIF`
export const REQUEST_MORE = `${name}/REQUEST_MORE`
export const PENDING = `${name}/PENDING`


const withID = id => create(async (url) => ({ url, id }))
const fetchRandomGifWithID = id =>
  pipe(randomGif.tasks.fetchRandomGif, withID(id))

export const add = topic => ({ type: ADD, payload: { topic }})

export const changeTopic = topic => ({ type: CHANGE_TOPIC, payload: { topic } })

export const requestMore = ({ id, topic }) => {
  return dispatch =>
    dispatch(run(NEW_GIF, NEW_GIF, fetchRandomGifWithID(id), topic))
}

export const pending = id => ({ type: PENDING, payload: { id } })

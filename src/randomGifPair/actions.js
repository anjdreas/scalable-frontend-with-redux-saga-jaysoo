import { kAction } from '../utils'
import { name } from './__init__'

export const NEW_GIF_LEFT = `${name}/NEW_GIF_LEFT`
export const REQUEST_MORE_LEFT = `${name}/REQUEST_MORE_LEFT`
export const PENDING_LEFT = `${name}/PENDING_LEFT`
export const NEW_GIF_RIGHT = `${name}/NEW_GIF_RIGHT`
export const REQUEST_MORE_RIGHT = `${name}/REQUEST_MORE_RIGHT`
export const PENDING_RIGHT = `${name}/PENDING_RIGHT`

export const newGifLeft = (url) => ({ type: NEW_GIF_LEFT, payload: url })

export const requestMoreLeft = (topic) => ({ type: REQUEST_MORE_LEFT, payload: topic })

export const pendingLeft = () => ({ type: PENDING_LEFT })

export const newGifRight = (url) => ({ type: NEW_GIF_RIGHT, payload: url })

export const requestMoreRight = (topic) => ({ type: REQUEST_MORE_RIGHT, payload: topic })

export const pendingRight = () => ({ type: PENDING_RIGHT })

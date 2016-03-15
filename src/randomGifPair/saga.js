import { takeEvery } from 'redux-saga'
import { call, fork, take, put } from 'redux-saga/effects'
import * as randomGif from '../randomGif'
import * as tasks from '../tasks'
import * as actions from './actions'

const withSide = side => tasks.create(async (url) => ({ side, url }))
const fetchRandomGifWithSide = side => tasks.pipe(randomGif.tasks.fetchRandomGif, withSide(side))

function* doRequestMore(action) {
  const { payload: { side, topic } } = action
  yield put(actions.pending({ side }))
  yield put(tasks.actions.runTask( actions.NEW_GIF
                                 , actions.NEW_GIF
                                 , fetchRandomGifWithSide(side)
                                 , topic))
}

function* watchRequestMore() {
  yield* takeEvery(actions.REQUEST_MORE, doRequestMore)
}

export default function* () {
  yield fork(watchRequestMore)
}

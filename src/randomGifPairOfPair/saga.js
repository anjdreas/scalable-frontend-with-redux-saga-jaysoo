import { takeEvery } from 'redux-saga'
import { call, fork, take, put } from 'redux-saga/effects'
import * as randomGif from '../randomGif'
import * as tasks from '../tasks'
import * as actions from './actions'

const withPosition = position => tasks.create(async (url) => ({ url, position }))
const fetchRandomGifWithPosition = position =>
  tasks.pipe(randomGif.tasks.fetchRandomGif, withPosition(position))

function* doRequestMore(action) {
  const { payload: { position, topic } } = action
  yield put(actions.pending({ position }))
  yield put(tasks.actions.runTask(actions.NEW_GIF, actions.NEW_GIF, fetchRandomGifWithPosition(position), topic))
}

function* watchRequestMore() {
  yield* takeEvery(actions.REQUEST_MORE, doRequestMore)
}

export default function* () {
  yield fork(watchRequestMore)
}

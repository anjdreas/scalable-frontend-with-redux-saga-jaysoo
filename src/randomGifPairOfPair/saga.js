import { takeEvery } from 'redux-saga'
import { call, fork, take, put } from 'redux-saga/effects'
import { composeP } from 'ramda'
import * as randomGif from '../randomGif'
import * as tasks from '../tasks'
import * as actions from './actions'

const withPosition = position => async (url) => ({ url, position })
const fetchRandomGifWithPosition = position =>
  composeP(withPosition(position), randomGif.api.fetchRandomGif)

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

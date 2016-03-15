import { takeEvery } from 'redux-saga'
import { call, fork, take, put } from 'redux-saga/effects'
import * as randomGif from '../randomGif'
import * as tasks from '../tasks'
import * as actions from './actions'

const withID = id => tasks.create(async (url) => ({ url, id }))
const fetchRandomGifWithID = id =>
  tasks.pipe(randomGif.tasks.fetchRandomGif, withID(id))

function* doRequestMore(action)  {
  const { payload: { id, topic } } = action
  yield put(actions.pending(id))
  yield put(tasks.actions.runTask(actions.NEW_GIF, actions.NEW_GIF, fetchRandomGifWithID(id), topic))
}

function* watchRequestMore() {
  yield* takeEvery(actions.REQUEST_MORE, doRequestMore)
}

export default function* () {
  yield fork(watchRequestMore)
}

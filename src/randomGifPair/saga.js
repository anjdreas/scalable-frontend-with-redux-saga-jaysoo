import { call, fork, take, put } from 'redux-saga/effects'
import { compose, lift } from 'ramda'
import * as randomGif from '../randomGif'
import * as tasks from '../tasks'
import * as actions from './actions'

function* watchRequestMoreLeft() {
  while (true) {
    const { payload: topic } = yield take(actions.REQUEST_MORE_LEFT)
    yield put(actions.pendingLeft())
    const task = randomGif.tasks.fetchRandomGif(topic)
    yield put(tasks.actions.runTask(task, actions.NEW_GIF_LEFT, actions.NEW_GIF_LEFT))
  }
}

function* watchRequestMoreRight() {
  while (true) {
    const { payload: topic } = yield take(actions.REQUEST_MORE_RIGHT)
    yield put(actions.pendingRight())
    const task = randomGif.tasks.fetchRandomGif(topic)
    yield put(tasks.actions.runTask(task, actions.NEW_GIF_RIGHT, actions.NEW_GIF_RIGHT))
  }
}

export default function* () {
  yield [ fork(watchRequestMoreLeft)
        , fork(watchRequestMoreRight)
        ]
}

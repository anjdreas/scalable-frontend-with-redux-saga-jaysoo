import { takeEvery } from 'redux-saga'
import { call, fork, take, put } from 'redux-saga/effects'
import { compose, lift } from 'ramda'
import * as randomGif from '../randomGif'
import * as tasks from '../tasks'
import * as actions from './actions'

const withSide = side => url => ({ url, side })

function* doRequestMore(action) {
  const { payload: { side, topic } } = action
  yield put(actions.pending({ side }))
  const task = compose(lift(withSide(side)), randomGif.tasks.fetchRandomGif)(topic)
  yield put(tasks.actions.runTask(task, actions.NEW_GIF, actions.NEW_GIF))
}

function* watchRequestMore() {
  yield* takeEvery(actions.REQUEST_MORE, doRequestMore)
}

export default function* () {
  yield fork(watchRequestMore)
}

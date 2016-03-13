import { identity } from 'ramda'
import { call, fork, put, take } from 'redux-saga/effects'
import { RUN_TASK } from './actions'

const runTask = async (fn, args) => {
  try {
    const result = await fn(...args)
    return { resolved: result }
  } catch (e) {
    return { rejected: e }
  }
}

function* doRunTask(successType, failureType, fn, args) {
  const { resolved, rejected } = yield call(runTask, fn, args)
  if (resolved) {
    yield put ({ type: successType, payload : resolved })
  } else {
    yield put ({ type: failureType, payload : rejected })
  }
}
function* watchRunTasks() {
  while (true) {
    const { successType
          , failureType
          , fn
          , args
          } = yield take(RUN_TASK)
    yield fork(doRunTask, successType, failureType, fn, args)
  }
}

export default function* () {
  yield fork(watchRunTasks)
}

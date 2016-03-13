export const RUN_TASK = 'RUN_TASK'

export const runTask = (successType, failureType, fn, ...args) => (
  { type: RUN_TASK
  , successType
  , failureType
  , fn
  , args
  } )

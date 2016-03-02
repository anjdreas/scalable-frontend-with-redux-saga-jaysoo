import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import * as counter from '../counter'
import * as actions from './actions'
import { getFirst, getSecond } from './selectors'

export const Component = (
    { first
    , second
    , incFirst
    , decFirst
    , incSecond
    , decSecond
    }
  ) => (
    <div>
      <h3>First Counter</h3>
      <counter.Component model={first} inc={incFirst} dec={decFirst}/>
      <h3>Second Counter</h3>
      <counter.Component model={second} inc={incSecond} dec={decSecond}/>
    </div>
)

export default connect(
  createStructuredSelector(
    { first: getFirst
    , second: getSecond
    }
  )
  ,
  dispatch => bindActionCreators(actions, dispatch)
)(Component)

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import * as randomGif from '../randomGif'
import * as actions from './actions'
import { getLeft, getRight } from './selectors'

export const Component = (
  { requestMoreLeft
  , requestMoreRight
  , left
  , right
  }
) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flexGrow: 1 }}>
        <randomGif.Component model={left} requestMore={requestMoreLeft}/>
      </div>
      <div style={{ flexGrow: 1 }}>
        <randomGif.Component model={right} requestMore={requestMoreRight}/>
      </div>
    </div>
  )

}
export default connect(
  createStructuredSelector({ left: getLeft, right: getRight })
  ,
  dispatch => bindActionCreators(actions, dispatch)
)(Component)

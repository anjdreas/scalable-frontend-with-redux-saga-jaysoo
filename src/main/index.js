import React from 'react'
import { combineReducers } from 'redux'
import * as counter from '../counter'
import * as counterPair from '../counterPair'

export const reducer = combineReducers(
  { [counter.name]: counter.reducer
  , [counterPair.name]: counterPair.reducer
  })

export const App = () => (
  <div>
    <h2>Counter Example:</h2>
    <div className="container">
      <counter.Container/>
    </div>

    <hr/>

    <h2>Counter Pair Example:</h2>
    <div className="container">
      <counterPair.Container/>
    </div>
  </div>
)
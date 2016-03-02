import './styles.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as main from './main'
import { createStore } from 'redux'

const store = createStore(main.reducer)

render(
  <Provider store={store}>
    <main.App/>
  </Provider>
  ,
  document.getElementById('app')
)
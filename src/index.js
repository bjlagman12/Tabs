import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App.js'

import { Provider } from 'react-redux'

import store from './store/store'

console.log(store.getState())

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

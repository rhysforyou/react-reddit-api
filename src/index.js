import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPosts } from './actions'
import rootReducer from './reducers'
import './index.css'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(selectSubreddit('aww'))
store.dispatch(fetchPosts('reactjs')).then(() => {
  store.dispatch(selectSubreddit('aww'))
  store.dispatch(fetchPosts('aww'))
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

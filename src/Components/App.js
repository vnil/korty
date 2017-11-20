import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './Home'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import reducers from '../Redux/reducers'

let store = createStore(reducers, applyMiddleware(logger))

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
)

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default App

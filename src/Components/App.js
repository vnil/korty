import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './Home'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from '../Redux/reducers'

let store = createStore(reducers)

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

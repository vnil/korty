import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './Home'
import { Provider } from 'react-redux'
import createStore from '../Redux/createStore'
import { PersistGate } from 'redux-persist/es/integration/react'
import Redirect from '../Containers/Redirect'

let { store, persistor } = createStore()

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Redirect} />
      </Switch>
    </div>
  </Router>
)

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
)

export default App

import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import reducers from './reducers'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
//import reducers from './reducers' // where reducers is an object of reducers

const config = {
  key: 'root',
  storage,
}

export default () => {
  const reducer = persistCombineReducers(config, reducers)

  let store = createStore(reducer, applyMiddleware(logger))
  let persistor = persistStore(store)

  return { persistor, store }
}

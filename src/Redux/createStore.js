import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from 'redux-logger'
import reducers from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import redirectObjects from './redirectObjects'
import form from './form'


const config = {
  key: 'root',
  storage,
  whitelist: ['list'],
}

export default () => {
  const reducer = combineReducers({
    redirectObjects: persistReducer(config, redirectObjects),
    form,
  })

  let store = createStore(reducer, applyMiddleware(logger))
  let persistor = persistStore(store)

  return { persistor, store }
}

import generatedUrls from './redirectObjects'
import form from './form'

import { combineReducers } from 'redux'
//import { fork } from 'redux-saga/effects'

// export function* sagas() {
//   yield fork(storeSagas)
// }

export default combineReducers({
  generatedUrls,
  form,
})

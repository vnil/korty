//import { call, put, takeLatest } from 'redux-saga/effects'

// Actions
const ADD_REDIRECT_OBJECT = 'korty/redirect-objects/add-redirect-object'

// Initial State
const initialState = []

// Reducers
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_REDIRECT_OBJECT:
      return [...state, action.redirectObject]
    default:
      return state
  }
}

//Sagas
// function* fetchInitialDataSaga() {
//   try {
//     yield put({ type: LOAD_INITIAL_DATA_STARTED })
//   } catch (e) {
//     yield put({ type: LOAD_INITIAL_DATA_FAILED })
//   }
// }

// export function* sagas() {
//   yield takeLatest(LOAD_INITIAL_DATA, fetchInitialDataSaga)
// }

//Action Creators
export const addRedirectObject = () => ({
  type: ADD_REDIRECT_OBJECT,
})

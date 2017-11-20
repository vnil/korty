//TODO: Rename reducer/file to redirects only?

import { generateUniqueUrlCode } from '../Helpers/urlHelpers'

// Actions
//const ADD_REDIRECT_OBJECT = 'korty/redirect-objects/add-redirect-object'
const GENERATE_URL = 'korty/form/generate-url'

// Initial State
const initialState = {
  list: [],
}

function listReducer(state = [], action = {}) {
  switch (action.type) {
    // case ADD_REDIRECT_OBJECT:
    //   return [
    //     ...state,
    //     action.redirectObject,
    //   ]
    case GENERATE_URL:
      const uniqueCode = generateUniqueUrlCode(state)
      const newRedirectObject = {
        kortyCode: uniqueCode,
        targetUrl: action.targetUrl,
      }
      return [
        ...state,
        newRedirectObject,
      ]
    default:
      return state
  }
}

// Reducers
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // case ADD_REDIRECT_OBJECT:
    //   return {
    //     ...state,
    //     list: listReducer(state.list, action)
    //   }
    case GENERATE_URL:
      return {
        ...state,
        list: listReducer(state.list, action)
      }

    default:
      return state
  }
}

//Action Creators
export const generateUrl = (targetUrl) => ({
  type: GENERATE_URL,
  targetUrl,
})

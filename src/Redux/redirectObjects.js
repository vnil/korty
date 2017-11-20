//TODO: Rename reducer/file to redirects only?

import { generateUniqueUrlCode } from '../Helpers/urlHelpers'

// Actions
const GENERATE_URL = 'korty/redirect-objects/generate-url'
const RESET_NEWLY_GENERATED = 'korty/redirect-objects'

// Initial State
const initialState = {
  list: [],
  newlyGenerated: null,
}

function listReducer(state = [], action = {}) {
  switch (action.type) {
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
    case GENERATE_URL:
      const newList = listReducer(state.list, action)
      return {
        ...state,
        list: newList,
        newlyGenerated: newList[newList.length - 1],
      }
    case RESET_NEWLY_GENERATED:
      return {
        ...state,
        newlyGenerated: null,
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

export const resetNewlyGenerated = () => ({
  type: RESET_NEWLY_GENERATED,
})

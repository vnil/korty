// Actions
const UPDATE_VALUE = 'korty/form/update-value'

// Initial State
const initialState = {
  value: '',
  valid: true,
}

// Reducers
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}

//Action Creators
export const updateValue = (value) => ({
  type: UPDATE_VALUE,
  value,
})

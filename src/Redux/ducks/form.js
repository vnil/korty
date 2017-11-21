// Actions
export const UPDATE_VALUE = 'korty/form/update-value'
export const SET_VALID = 'korty/form/set-valid'

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
        value: action.value,
      }
      case SET_VALID:
        return {
          ...state,
          valid: action.valid,
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

export const setValid = (valid) => ({
  type: SET_VALID,
  valid,
})

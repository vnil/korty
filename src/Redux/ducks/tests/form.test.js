import reducer, { updateValue, setValid, UPDATE_VALUE, SET_VALID } from '../form'

describe('form actions', () => {
  it('should create an action to update form value', () => {
    const value = 'New value'
    const expectedAction = {
      type: UPDATE_VALUE,
      value,
    }
    expect(updateValue(value)).toEqual(expectedAction)
  })

  it('should create an action to set form valid', () => {
    const valid = true
    const expectedAction = {
      type: SET_VALID,
      valid,
    }
    expect(setValid(valid)).toEqual(expectedAction)
  })
})

describe('form reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      value: '',
      valid: true,
    }

    expect(reducer(undefined, {})).toEqual(expectedState)
  })

  it('should return state with updated value', () => {
    const value = 'A new value'
    const action = {
      type: UPDATE_VALUE,
      value,
    }
    const expectedState = {
      value,
      valid: true,
    }

    expect(reducer(undefined, action)).toEqual(expectedState)
  })

  it('should return state with valid set to false', () => {
    const valid = false
    const action = {
      type: SET_VALID,
      valid,
    }
    const expectedState = {
      value: '',
      valid: false,
    }

    expect(reducer(undefined, action)).toEqual(expectedState)
  })
})

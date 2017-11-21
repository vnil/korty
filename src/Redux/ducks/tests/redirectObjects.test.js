import reducer, { generateUrl, resetNewlyGenerated, GENERATE_URL, RESET_NEWLY_GENERATED } from '../redirectObjects'

describe('redirectObjects actions', () => {
  it('should create an action to generate a URL', () => {
    const targetUrl = 'http://www.google.com/'
    const expectedAction = {
      type: GENERATE_URL,
      targetUrl,
    }
    expect(generateUrl(targetUrl)).toEqual(expectedAction)
  })

  it('should reset newly generated URL', () => {
    const expectedAction = {
      type: RESET_NEWLY_GENERATED,
    }
    expect(resetNewlyGenerated()).toEqual(expectedAction)
  })
})

describe('redirectObjects reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      list: [],
      newlyGenerated: null,
    }

    expect(reducer(undefined, {})).toEqual(expectedState)
  })

  it('should return state with generated URL', () => {
    const targetUrl = 'http://www.amazon.com'
    const action = {
      type: GENERATE_URL,
      targetUrl,
    }

    const expectedState = {
      list: [],
      newlyGenerated: null,
    }

    const newState = reducer(undefined, action)

    expect(newState.newlyGenerated).toBeTruthy()
    expect(newState.list.length).toBe(1)

  })

  it('should reset newly generated url', () => {
    const state = {
      list: [],
      newlyGenerated: 'http://www.someurl.com/',
    }

    const action = {
      type: RESET_NEWLY_GENERATED,
    }
    const expectedState = {
      value: '',
      valid: false,
    }

    const newState = reducer(state, action)

    expect(newState.newlyGenerated).toBe(null)
  })
})

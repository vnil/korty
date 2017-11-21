const { randomizeString, isValidUrl, generateUniqueUrlCode, makeUrl } = require('../urlHelpers')

describe('randomizeString', () => {
  it('should randomize a 6-character string', () => {
    expect(randomizeString().length).toBe(6)
  })

  it('should contain only a-zA-Z0-9', () => {
    expect(randomizeString()).toMatch(/[a-zA-Z0-9]+$/)
  })
})

describe('isValidUrl', () => {
  const invalidUrl = 'http:invalid-url'
  it('should return false for a invalid url (' + invalidUrl + ')' , () => {
    expect(isValidUrl(invalidUrl)).toBe(false)
  })

  const validUrl = 'https://www.amazon.com/gp/product/0486242587/ref=s9u_simh_gw_i1?ie=UTF8&fpl=fresh&pd_rd_i=0486242587&pd_rd_r=f1671e05-cea2-11e7-bf0b-2fcaf32ef7bc&pd_rd_w=gcBXR&pd_rd_wg=Z8mmk&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=M6FZ1AKQ1CMK4DVD603H&pf_rd_t=36701&pf_rd_p=1dd2ffc3-992f-4bde-81b0-de270e0ead5a&pf_rd_i=desktop'
  it('should return true for a valid url (' + validUrl + ')' , () => {
    expect(isValidUrl(validUrl)).toBe(true)
  })

  it('should return false for an empty string' , () => {
    expect(isValidUrl('')).toBe(false)
  })
})

describe('generateUniqueUrlCode', () => {
  let iterations = 0
  const mockCode1 = 'abc123'
  const mockCode2 = 'xyz789'

  const mockRandomizeString = () => {
    iterations++
    return iterations < 5 ? mockCode1 : mockCode2
  }

  const mockExistingObjects = [mockCode1]
  const expectedResult = mockCode2

  it('should generate unique codes' , () => {
    const generatedCode = generateUniqueUrlCode(mockExistingObjects, mockRandomizeString)
    expect(generatedCode).toEqual(expectedResult)
  })

  it('should have iterated 5 times to generate previous code' , () => {
    expect(iterations).toEqual(5)
  })
})


describe('makeUrl', () => {
  const mockCode = 'def456'

  it('should return full korty-url' , () => {
    console.log(makeUrl(mockCode));
    expect(makeUrl(mockCode)).toEqual(window.location.href + mockCode)
  })
})



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

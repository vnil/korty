import React from 'react'
import './GenerateUrl.css'
import Button from './Button'
import Input from './Input'
import ErrorMessage from './ErrorMessage'
import { isValidUrl } from '../Helpers/urlHelpers'

const processValue = (value, setValid, generateUrl) => {
  console.log('Processing...');
  const valid = isValidUrl(value)
  console.log('Valiid?', valid);
  if (valid) {
    console.log('Generate!', value);
    generateUrl(value)
  }
  setValid(valid)
}

const GenerateUrl = ({value, updateValue, valid, setValid, generateUrl}) => (
  <div className="GenerateUrl-container">
    <p>Enter a URL to kortify</p>
    <div className="GenerateUrl-input-container">
      <Input
        type="text"
        value={value}
        onChange={({target: {value}}) => updateValue(value)}
        onBlur={() => processValue(value, setValid, generateUrl)}
        placeholder="http://www.your-long-url.com/"
      />
      <Button className="GenerateUrl-button" onClick={() => processValue(value, setValid, generateUrl)}>Do it!</Button>
    </div>
    {!valid && <ErrorMessage>Please enter a valid URL and try again</ErrorMessage>}
  </div>
)

export default GenerateUrl

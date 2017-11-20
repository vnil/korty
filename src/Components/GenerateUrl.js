import React from 'react'
import './GenerateUrl.css'
import Button from './Button'
import Input from './Input'
import ErrorMessage from './ErrorMessage'
import { isValidUrl } from '../Helpers/urlHelpers'

const processValue = (value, setValid, updateValue, generateUrl) => {
  const valid = isValidUrl(value)
  if (valid) {
    generateUrl(value)
    updateValue('')
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
        onBlur={() => setValid(isValidUrl(value))}
        onKeyPress={(e) => e.key == 'Enter' && processValue(value, setValid, updateValue, generateUrl)}
        placeholder="http://www.your-long-url.com/"
      />
      <Button className="GenerateUrl-button" onClick={() => processValue(value, setValid, updateValue, generateUrl)}>Do it!</Button>
    </div>
    {!valid && <ErrorMessage>Please enter a valid URL and try again</ErrorMessage>}
  </div>
)

export default GenerateUrl

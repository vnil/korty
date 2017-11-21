import React, { Component } from 'react'
import './GenerateUrl.css'
import Button from './Common/Button'
import Input from './Common/Input'
import ErrorMessage from './Common/ErrorMessage'
import FreshUrl from './FreshUrl'
import { isValidUrl } from '../Helpers/urlHelpers'

class GenerateUrl extends Component {
  processValue() {
    const valid = isValidUrl(this.props.value)
    this.props.resetNewlyGenerated()
    if (valid) {
      this.props.generateUrl(this.props.value)
      this.props.updateValue('')
    }

    this.props.setValid(valid)
  }

  render() {
    const {value, updateValue, valid, setValid, newlyGenerated} = this.props

    return (
      <div className="GenerateUrl-container">
        <p>Enter a URL to kortify</p>
        <div className="GenerateUrl-input-container">
          <Input
            type="text"
            value={value}
            onChange={({target: {value}}) => updateValue(value)}
            onBlur={() => setValid(isValidUrl(value))}
            onKeyPress={(e) => e.key === 'Enter' && this.processValue()}
            placeholder="http://www.your-long-url.com/"
          />
          <Button className="GenerateUrl-button" onClick={() => this.processValue()}>Do it!</Button>
        </div>
        <ErrorMessage show={!valid}>Please enter a valid URL and try again</ErrorMessage>
        <FreshUrl redirectObject={newlyGenerated} />
      </div>
    )
  }
}

export default GenerateUrl

import React from 'react'
import './GenerateUrl.css'
import Button from './Button'
import GenerateUrlContainer from '../Containers/GenerateUrlContainer'

const GenerateUrl = () => (
  <div className="GenerateUrl-container">
    <p>Enter a URL to kortify</p>
    <div className="GenerateUrl-input-container">
      <GenerateUrlContainer />
      <Button className="GenerateUrl-button">Do it!</Button>
    </div>
  </div>
)

export default GenerateUrl

import React, { Component } from 'react'
import './GenerateUrl.css'
import Input from './Input'
import Button from './Button'

const GenerateUrl = () => (
  <div className="GenerateUrl-container">
    <p>Enter an URL to minify.</p>
    <div className="GenerateUrl-input-container">
      <Input type="text" placeholder="http://www.your-long-url.com/" />
      <Button className="GenerateUrl-button">Do it!</Button>
    </div>
  </div>
)

export default GenerateUrl

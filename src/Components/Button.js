import React, { Component } from 'react'
import './Button.css'

const Button = ({children, className, ...props}) => (
  <button className={"Button " + className}  {...props}>{children}</button>
)

export default Button

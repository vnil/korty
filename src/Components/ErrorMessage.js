import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = ({children}) => (
  <div className="ErrorMessage">
    <span>{children}</span>
  </div>
)

export default ErrorMessage

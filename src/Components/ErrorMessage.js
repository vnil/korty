import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = ({show, children}) => show ? (
    <div className="ErrorMessage">
      <span>{children}</span>
    </div>
) : null

export default ErrorMessage

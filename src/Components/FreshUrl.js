import React from 'react'
import './FreshUrl.css'
import { makeUrl } from '../Helpers/urlHelpers'

const FreshUrl = ({redirectObject}) => {
  if (!redirectObject) {
    return null
  }

  return (
    <div className="FreshUrl">
      <h2>Done! Find your link below</h2>
      <div className="FreshUrl-link">
        {makeUrl(redirectObject.kortyCode)}
      </div>
    </div>
  )
}

export default FreshUrl

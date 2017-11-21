import React from 'react'
import { connect } from 'react-redux'
import GeneratedUrls from '../Components/GeneratedUrls'

//Only show the 10 last objects
const ExistingUrlsContainer = ({redirectObjects}) => (
  <GeneratedUrls data={redirectObjects.slice(0, 10)} />
)

export default connect(state => ({
  redirectObjects: state.redirectObjects.list,
}))(ExistingUrlsContainer)

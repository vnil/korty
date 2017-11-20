import React from 'react'
import { connect } from 'react-redux'
import GeneratedUrls from '../Components/GeneratedUrls'

const ExistingUrlsContainer = ({redirectObjects}) => (
  <GeneratedUrls data={redirectObjects} />
)

export default connect(state => ({
  redirectObjects: state.redirectObjects.list,
}))(ExistingUrlsContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'

class Redirect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      missing: false,
    }
  }
  componentDidMount() {
    console.log(this.props)
    const kortyCode = this.props.location.pathname.slice(1)
    const redirectObject = this.props.redirects.find((item) => item.kortyCode === kortyCode)
    if (redirectObject) {
      window.location.href = redirectObject.targetUrl
    }
    else {
      this.setState({missing: true})
    }
  }
  render() {
    if (!this.state.missing) {
      return null
    }
    return (
      <h1>We could not find your link - <a href="/">Home</a></h1>
    )
  }
}

export default connect(state => ({
  redirects: state.redirectObjects.list,
}))(Redirect)

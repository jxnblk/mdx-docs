import React from 'react'
// import { withRouter } from 'react-router-dom'
import withRouter from './withRouter'

export default withRouter(class ScrollTop extends React.Component {
  componentDidUpdate (previous) {
    if (previous.location.pathname === this.props.location.pathname) return
    window.scrollTo(0, 0)
  }

  render () {
    return false
  }
})

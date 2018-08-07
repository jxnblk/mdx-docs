import React from 'react'
import Layout from './Layout'
import SideNav from './SideNav'

export default class Root extends React.Component {
  render () {
    return (
      <Layout
        {...this.props}
        sidebar={<SideNav {...this.props} />}
      />
    )
  }
}

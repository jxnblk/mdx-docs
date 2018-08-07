import React from 'react'
import Container from './Container'
import Layout from './Layout'
import SideNav from './SideNav'

export default class Root extends React.Component {
  render () {
    return (
      <Container {...this.props}>
        <Layout
          {...this.props}
          sidebar={<SideNav {...this.props} />}
        />
      </Container>
    )
  }
}

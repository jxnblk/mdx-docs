import React from 'react'
import Provider from './Provider'
import Layout from './Layout'
import SideNav from './SideNav'

export default class Root extends React.Component {
  render () {
    return (
      <Provider {...this.props}>
        <Layout
          {...this.props}
          sidebar={<SideNav {...this.props} />}
        />
      </Provider>
    )
  }
}

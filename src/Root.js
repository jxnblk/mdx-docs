import React from 'react'
import Layout from './Layout'
import SideNav from './SideNav'
import Pagination from './Pagination'

export default class Root extends React.Component {
  render () {
    const { children, ...props } = this.props
    return (
      <Layout
        {...this.props}
        sidebar={<SideNav {...props} />}
        __pagination={<Pagination {...props} />}
      />
    )
  }
}

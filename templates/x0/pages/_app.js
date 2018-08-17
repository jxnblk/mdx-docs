import React from 'react'
import { SidebarLayout } from '@compositor/x0/components'

export default class extends React.Component {
  static defaultProps = {
    title: 'npm init docs',
  }

  render () {
    return (
      <SidebarLayout {...this.props} />
    )
  }
}

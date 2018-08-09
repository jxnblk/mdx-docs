import React from 'react'
import sortby from 'lodash.sortby'
import { NavLink } from './components'
import { withRoutes } from './route-context'

export default withRoutes(class Sidenav extends React.Component {
  render () {
    const {
      routes = [],
      children
    } = this.props
    const pages = routes.filter(route => route.name !== '404')
    const order = routes.config.navigation || []

    const links = sortby(pages, route => {
      const index = order.indexOf(route.name)
      return index > -1 ? index : Infinity
    })

    return (
      <React.Fragment>
        {links.map(link => (
          <NavLink
            key={link.key}
            to={link.path}
            exact={link.exact}
            px={3}
            py={1}
            children={link.title}
          />
        ))}
        {children}
      </React.Fragment>
    )
  }
})

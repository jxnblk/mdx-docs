import React from 'react'
import PropTypes from 'prop-types'
import sortby from 'lodash.sortby'
import { NavLink } from './components'

export default class Sidenav extends React.Component {
  static propTypes = {
    order: PropTypes.array
  }
  render () {
    const {
      order = [],
      routes = [],
      children
    } = this.props

    const links = sortby(routes, route => order.indexOf(route.name))

    return (
      <React.Fragment>
        {links.map(link => (
          <NavLink
            key={link.key}
            to={link.path}
            exact={link.exact}
            children={link.name}
          />
        ))}
        {children}
      </React.Fragment>
    )
  }
}

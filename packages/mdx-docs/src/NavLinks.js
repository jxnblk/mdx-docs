import React from 'react'
import { withDocs } from './context'
import withComponents from './withComponents'
import { a as Link } from './components'

export const NavLink = props =>
  <Link
    {...props}
    style={{
      display: 'block',
      color: 'inherit',
      fontWeight: 'bold',
      fontSize: '14px',
      textDecoration: 'none',
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingLeft: '16px',
      paddingRight: '16px',
    }}
  />

export const NavLinks = withComponents(withDocs(({
  components = {},
  routes = [],
  ...props
}) => (
  <React.Fragment>
    {routes.map((route, i) => (
      <NavLink
        key={route.path + i}
        as={components.a}
        href={route.path}
        children={route.name}
      />
    ))}
  </React.Fragment>
)))

export default NavLinks

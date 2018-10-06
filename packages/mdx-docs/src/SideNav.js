import React from 'react'
import styled from 'styled-components'
import { withDocs } from './context'
import withComponents from './withComponents'
import { a } from './components'

export const NavLink = styled(a)([], {
  display: 'block',
  color: 'inherit',
  fontWeight: 'bold',
  fontSize: '14px',
  textDecoration: 'none',
  paddingTop: '4px',
  paddingBottom: '4px',
  paddingLeft: '16px',
  paddingRight: '16px',
}, props => props.theme.NavLink)

export const SideNav = withComponents(withDocs(({
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

export default SideNav

import React from 'react'
import styled from 'styled-components'
import { withDocs } from './context'
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

export default withDocs(({
  routes = [],
  ...props
}) => (
  <React.Fragment>
    {routes.map((route, i) => (
      <NavLink
        key={route.path + i}
        href={route.path}
        children={route.name}
      />
    ))}
  </React.Fragment>
))

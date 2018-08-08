import React from 'react'
import { Link } from '@reach/router'

const getProps = ({ isCurrent, isPartiallyCurrent }) => {
  const isActive = (exact && isCurrent) || isPartiallyCurrent
  if (isActive) {
    return {
      className: [ className, activeClassName ].join(' '),
      style: { ...style, ...activeStyle }
    }
  } else {
    return { className, style }
  }
}
const RouterNavLink = ({
  activeClassName = 'active',
  activeStyle,
  style,
  className,
  exact,
  ...props
}) =>
  <Link
    getProps={getProps}
    {...props}
  />

export default RouterNavLink

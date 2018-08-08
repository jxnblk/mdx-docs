import React from 'react'
import { Link } from '@reach/router'

const getProps = ({ className, exact, isCurrent, isPartiallyCurrent }) => {
  const isActive = (exact && isCurrent) || isPartiallyCurrent
  return {
    className: [
      className,
      (isActive && 'active')
    ]
    .filter(Boolean)
    .join(' ')
  }
}
const RouterNavLink = ({
  activeClassName = 'active',
  className,
  exact,
  ...props
}) =>
  <Link
    getProps={getProps}
    {...props}
  />

export default RouterNavLink

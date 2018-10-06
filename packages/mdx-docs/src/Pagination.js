import React from 'react'
import { withDocs } from './context'
import withComponents from './withComponents'
import { a as Link } from './components'

const Root = props =>
  <div
    {...props}
    style={{
      display: 'flex'
    }}
  />

const Spacer = props =>
  <div
    {...props}
    style={{
      margin: 'auto'
    }}
  />

const PaginationLink = props =>
  <Link
    {...props}
    style={{
      display: 'block',
      color: 'inherit',
      fontWeight: 'bold',
      textDecoration: 'none',
    }}
  />

export const Pagination = withComponents(withDocs(({
  components = {},
  routes = [],
  route
}) => {
  const index = routes.indexOf(route)
  const previous = routes[index - 1]
  const next = routes[index + 1]

  return (
    <Root>
      {previous && (
        <PaginationLink
          as={components.a}
          href={previous.path}>
          {previous.name}
        </PaginationLink>
      )}
      <Spacer />
      {next && (
        <PaginationLink
          as={components.a}
          href={next.path}>
          {next.name}
        </PaginationLink>
      )}
    </Root>
  )
}))

export default Pagination

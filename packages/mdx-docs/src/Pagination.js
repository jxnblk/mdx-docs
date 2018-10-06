import React from 'react'
import styled from 'styled-components'
import { withDocs } from './context'
import withComponents from './withComponents'
import css from './css'
import { a } from './components'

const Root = styled.div([], { display: 'flex' }, css('Pagination'))
const Spacer = styled.div([], { margin: 'auto' })
const PaginationLink = styled(a)([], {
  display: 'block',
  color: 'inherit',
  fontWeight: 'bold',
  textDecoration: 'none',
}, css('PaginationLink'))

export default withComponents(withDocs(({
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

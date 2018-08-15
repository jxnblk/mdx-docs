import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { withDocs } from './context'
import css from './css'
import { a } from './components'

const Root = styled.div([], css('Pagination'))
const Flex = styled.div([], { display: 'flex' })
const Spacer = styled.div([], { margin: 'auto' })
const PaginationLink = styled(a)([], {
  display: 'block',
  color: 'inherit',
  fontWeight: 'bold',
  textDecoration: 'none',
}, css('PaginationLink'))

export const Pagination = withDocs(({
  routes = [],
  route
}) => {
  const index = routes.indexOf(route)
  const previous = routes[index - 1]
  const next = routes[index + 1]

  return (
    <Root>
      <Container>
        <Flex>
          {previous && (
            <PaginationLink href={previous.path}>
              {previous.name}
            </PaginationLink>
          )}
          <Spacer />
          {next && (
            <PaginationLink href={next.path}>
              {next.name}
            </PaginationLink>
          )}
        </Flex>
      </Container>
    </Root>
  )
})

export default Pagination

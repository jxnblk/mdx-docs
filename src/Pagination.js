import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import sortby from 'lodash.sortby'
import { withRoutes } from './route-context'
import { NavLink } from './components'

const Root = styled(Flex)([], props => props.theme.Pagination)
const PaginationLink = styled(NavLink)([], props => props.theme.PaginationLink)

export default withRoutes(class Pagination extends React.Component {
  static propTypes = {
    order: PropTypes.array
  }
  render () {
    const {
      routes = [],
      route = {},
      order = []
    } = this.props
    const pages = routes.filter(route => route.name !== '404')
    const links = sortby(pages, route => {
      const index = order.indexOf(route.name)
      return index > -1 ? index : Infinity
    })
    const index = links.indexOf(route)
    const previous = links[index - 1]
    const next = links[index + 1]

    return (
      <Root my={5}>
        {previous && (
          <Box>
            <PaginationLink to={previous.path}>
              {previous.title}
            </PaginationLink>
          </Box>
        )}
        <Box mx='auto' />
        {next && (
          <Box>
            <PaginationLink to={next.path}>
              {next.title}
            </PaginationLink>
          </Box>
        )}
      </Root>
    )
  }
})

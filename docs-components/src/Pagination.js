import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'

export default class Pagination extends React.Component {
  render () {
    const { routes, route, Link } = this.props
    const index = routes.indexOf(route)
      //routes.findIndex(r => r.path === route.path)
    const previous = routes[index - 1]
    const next = routes[index + 1]

    return (
      <Flex
        py={4}
        alignItems='center'>
        {previous && (
          <Box>
            <Link href={previous.path}>
              {previous.name}
            </Link>
          </Box>
        )}
        <Box mx='auto' />
        {next && (
          <Box>
            <Link href={next.path}>
              {next.name}
            </Link>
          </Box>
        )}
      </Flex>
    )
  }
}

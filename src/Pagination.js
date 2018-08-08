import React from 'react'
import { Flex, Box } from 'grid-styled'
import { Context, withDocs } from './Context'

export default withDocs(({
  routes = [],
  route = {}
}) => {
  const index = routes.indexOf(route)
  // console.log('Pagination', routes, route)

  return false
  return (
    <Flex>
      pagination {index}
      {route.name}
      <Box mx='auto' />
    </Flex>
  )
})

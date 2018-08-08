import React from 'react'
import { Box } from 'grid-styled'
import {
  Provider,
  Layout,
  SideNav,
  Pagination
} from '../src'
import * as Rebass from 'rebass'

const theme = {}

const navOrder = [
  'index',
  'getting-started',
]

export default ({ children, ...props }) =>
  <Rebass.Provider>
    <Layout
      pagination={<Pagination order={navOrder} {...props} />}
      sidebar={(
        <SideNav
          {...props}
          order={navOrder}
        />
      )}>
      {children}
    </Layout>
  </Rebass.Provider>

import React from 'react'
import {
  Root,
  Layout,
  SideNav,
  Header,
  Pagination,
} from '../src'
import Hello from './hello.mdx'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Getting Started', path: '/getting-started' },
  { name: 'API', path: '/api' },
]

export default () =>
  <Layout
    router={{
      // shim for testing
      pathname: '/getting-started'
    }}
    routes={routes}
    header={(
      <Header>
        Header
      </Header>
    )}
    sidebar={(
      <SideNav />
    )}
    pagination={(
      <Pagination />
    )}>
    <Hello />
  </Layout>

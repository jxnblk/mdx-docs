import React from 'react'
import {
  Root,
  Layout,
  SideNav
} from '../src'
import Hello from './hello.mdx'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Getting Started', path: '/getting-started' },
]

export default () =>
  <Layout
    routes={routes}
    sidebar={(
      <SideNav />
    )}>
    <Hello />
  </Layout>

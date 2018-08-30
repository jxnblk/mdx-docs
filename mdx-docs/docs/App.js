import React from 'react'
import {
  Root,
  Layout,
  SideNav,
  Header,
  Pagination,
  themes
} from '../src'
import Hello from './hello.mdx'
import styled from 'styled-components'

const theme = {
  ...themes.default,
  NavLink: {
    '&.active': {
      color: '#07c'
    }
  }
}

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Getting Started', path: '/getting-started' },
  { name: 'API', path: '/api' },
]

const Pad = styled.div({
  paddingTop: '32px',
  paddingBottom: '32px',
})
const sidebar = (
  <Pad>
    <SideNav />
  </Pad>
)

export default () =>
  <Layout
    router={{
      // shim for testing
      pathname: '/getting-started'
    }}
    routes={routes}
    theme={theme}
    sidebar={sidebar}
    footer={(
      <Pagination />
    )}>
    <Hello />
  </Layout>

import React from 'react'
import App, { Container } from 'next/app'
import {
  Layout,
  SideNav,
  Pagination
} from 'mdx-docs'
import theme from '../src/theme'
import components from '../src/components'

const isProd = process.env.NODE_ENV === 'production'
const basepath = isProd ? '/mdx-docs' : ''

const routes = [
  { name: 'MDX Docs', path: '/' },
  { name: 'Theming', path: '/theming' },
  { name: 'Components', path: '/components' },
  { name: 'Custom Setup', path: '/custom-setup' },
  { name: 'Migrating from x0', path: '/migrating-from-x0' },
  { name: 'GitHub', path: 'https://github.com/jxnblk/mdx-docs' },
]

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let page = {}

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx)
    }

    return { page }
  }

  render () {
    const { Component, page } = this.props

    // <title>MDX Docs</title>
    return (
      <Container>
        <Layout
          {...this.props}
          basepath={basepath}
          theme={theme}
          components={components}
          routes={routes}
          sidebarWidth='192px'
          sidebar={(
            <SideNav />
          )}
          footer={(
            <Pagination />
          )}>
          <Component {...page} />
        </Layout>
      </Container>
    )
  }
}

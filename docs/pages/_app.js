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
const prefix = isProd ? '/mdx-docs' : ''

const routes = [
  { name: 'MDX Docs', path: prefix + '/' },
  { name: 'Theming', path: prefix + '/theming' },
  { name: 'Components', path: prefix + '/components' },
  { name: 'Custom Setup', path: prefix + '/custom-setup' },
  { name: 'Migrating from x0', path: prefix + '/migrating-from-x0' },
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

    return (
      <Container>
        <Layout
          {...this.props}
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

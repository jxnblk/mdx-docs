import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import {
  Layout,
  SideNav,
  Pagination
} from 'mdx-docs'
import theme from '../src/theme'
import components from '../src/components'

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

    return (
      <Container>
        <Head>
          <title>MDX Docs</title>
        </Head>
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

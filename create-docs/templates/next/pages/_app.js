import React from 'react'
import App, { Container } from 'next/app'
import {
  Layout,
  SideNav,
  Pagination
} from 'mdx-docs'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Getting Started', path: '/getting-started' },
  { name: 'Components', path: '/components' },
  { name: 'Button', path: '/components/Button' },
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
          routes={routes}
          sidebar={(
            <SideNav />
          )}
          pagination={(
            <Pagination />
          )}>
          <Component {...page} />
        </Layout>
      </Container>
    )
  }
}

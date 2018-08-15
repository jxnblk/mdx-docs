import React from 'react'
import App, { Container } from 'next/app'
import { Layout, SideNav } from 'mdx-docs'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Getting Started', path: '/getting-started' },
  { name: 'Components', path: '/components' },
  { name: 'Button', path: '/components/Button' },
]

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, router } = this.props
    // doesn't appear to be a way to automatically get routes array...
    // console.log(this.props, pageProps)

    const route = routes.find(route => route.path === router.pathname)

    return (
      <Container>
        <Layout
          {...this.props}
          routes={routes}
          sidebar={(
            <SideNav />
          )}
          route={route}
          page={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

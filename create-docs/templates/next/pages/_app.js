import React from 'react'
import App, { Container } from 'next/app'
import NextLink from 'next/link'
import { MDXProvider } from '@mdx-js/tag'
import {
  pre,
  code
} from 'mdx-editable'
import { ThemeProvider, Layout } from 'docs-components'

const components = {
  pre,
  code
}

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Getting Started', path: '/getting-started' },
  { name: 'Components', path: '/components' },
  { name: 'Button', path: '/components/Button' },
]

const Link = ({ children, ...props }) =>
  <NextLink {...props}>
    <a>{children}</a>
  </NextLink>

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
      <MDXProvider components={components}>
        <ThemeProvider>
          <Container>
            <Layout
              {...this.props}
              Link={Link}
              routes={routes}
              route={route}
              page={pageProps}>
              <Component {...pageProps} />
            </Layout>
          </Container>
        </ThemeProvider>
      </MDXProvider>
    )
  }
}

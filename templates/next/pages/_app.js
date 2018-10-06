import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'
import {
  Layout,
  NavLinks,
  Pagination
} from 'mdx-docs'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Getting Started', path: '/getting-started' },
  { name: 'Components', path: '/components' },
  { name: 'Button', path: '/components/Button' },
]

const components = {
  a: ({ href, ...props }) =>
    <Link href={href}>
      <a {...props} />
    </Link>
}

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let page = {}

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx)
    }

    return { page }
  }

  render () {
    const {
      Component,
      page,
      headManager,
      ...props
    } = this.props

    return (
      <Container>
        <Layout
          {...props}
          components={components}
          routes={routes}>
          <Layout.MenuToggle />
          <Layout.Sidebar>
            <NavLinks />
          </Layout.Sidebar>
          <Layout.Main>
            <Component {...page} />
            <Pagination />
          </Layout.Main>
        </Layout>
      </Container>
    )
  }
}

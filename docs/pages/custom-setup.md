
# Custom Setup

MDX Docs is a component library intended for use with Next.js.
The quickest way to create a new setup is with the `npm init docs` command, but if you have an existing Next.js app, follow the instructions below.

## Add MDX support

If you haven't already, ensure your app is set up to handle MDX by
configuring your `next.config.js` file to handle MDX.

To use the plugin, follow [these directions from MDX][mdx-next].

To manually set up the mdx loader, install the dependencies and add the following to your `next.config.js` file.

```sh
npm i @mdx-js/loader @mdx-js/mdx @mdx-js/tag
```

```js
// next.config.js
module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        '@mdx-js/loader',
      ]
    })

    return config
  }
}
```

## Add MDX Docs Components to a Custom App

Using a [custom App][], import and use the MDX Docs components to wrap your entire application.

```sh
npm i mdx-docs
```

```jsx
import React from 'react'
import App, { Container } from 'next/app'
import {
  Layout,
  SideNav
} from 'mdx-docs'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Getting Started', path: '/getting-started' },
  { name: 'API', path: '/api' },
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
          )}>
          <Component {...page} />
        </Layout>
      </Container>
    )
  }
}
```

## Customize

Use a custom theme or configure the MDX Docs components to change the look and feel of your site.

- [Theming](theming)
- [Components](components)

[mdx-next]: https://mdxjs.com/getting-started/next
[custom App]: https://github.com/zeit/next.js/#custom-app

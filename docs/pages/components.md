
# Components

MDX Docs includes several components to quickly create custom documentation sites.
All MDX Docs components' styles can be customized with [theming](/theming).

## Installation

The MDX Docs components can be installed separately from `npm init docs` with the following:

```sh
npm i mdx-docs
```

## Layout

TODO: update docs

```jsx
import React from 'react'
import App, { Container } from 'next/app'
import { Layout } from 'mdx-docs'

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
        <Layout {...this.props}>
          <Component {...page} />
        </Layout>
      </Container>
    )
  }
}
```


## SideNav

The SideNav component can be used in the Layout component's `sidebar` prop to provide navigation links for the `routes` prop.

### Props

Prop            | Type  | Description
----------------|-------|------------
`routes`        | array | Array of routes, provided by the Layout component via context

### Theming

The SideNav links can be styled with the `NavLink` theme key.

## NavLink

The NavLink component is the same component used in the SideNav component.
Use this component to add matching navigation links outside of the SideNav component.

## Pagination

The Pagination component can be used in the Layout component's `footer` prop to provide navigation links to the previous and next pages.

### Props

Prop            | Type  | Description
----------------|-------|------------
`routes`        | array | Array of routes, provided by the Layout component via context

### Theming

The Pagination components can be styled with the following theme keys.

Theme key         | Description
------------------|---------------
`Pagination`      | The root element of the component
`LayoutContainer` | Max width element to center contents. This is the same component used in the Layout component
`PaginationLink`  | The links used for previous and next pages



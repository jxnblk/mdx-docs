
# Components

mdx-docs includes several components to quickly create custom documentation sites.
All mdx-docs components' styles can be customized with [theming](theming.md).

## Layout

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

### Props

Prop          | Type  | Description
--------------|-------|------------
theme         |       |
components    |       |
routes        |       |
sidebar       |       |
sidebarWidth  |       |
header        |       |
footer        |       |
router        |       |

### Theming

Use the `Layout` key in your theme to style the root element.

```js
// example theme.js
export default {
  Layout: {
    color: 'tomato'
  }
}
```

Theme key | description
---|---
Layout | The root element of the component
LayoutSidebar | The left sidebar component
LayoutOverlay | The overlay that appears on small viewports when the menu is open
LayoutMain | the main content area to the right of the sidebar

## SideNav

The SideNav component can be used in the Layout component's `sidebar` prop to provide navigation links for the `routes` prop.

## Pagination

The Pagination component can be used in the Layout component's `footer` prop to provide navigation links to the previous and next pages.

## Header

The Header component can be used in the Layout component's `header` prop to add a page header at the top.

---

## Other Components

## Root
## Container
## LiveCode
## MenuButton


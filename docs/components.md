
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

To add a sidebar, header, and pagination, pass components as props.

```js
import { Layout, SideNav, Header, Pagination } from 'mdx-docs'
```

```jsx
<Layout
  {...this.props}
  sidebar={<SideNav />}
  header={(
    <Header>
      Custom header
    </Header>
  )}
  pagination={<Pagination />}>
  <Component {...page} />
</Layout>
```

### Props

Prop            | Type    | Description
----------------|---------|------------
`theme`         | object  | Object of styles to theme components
`components`    | object  | Object of React components for MDX and live code examples
`routes`        | array   | Array of route objects for creating navigation
`sidebar`       | node    | Element to render in the left sidebar
`sidebarWidth`  | string  | CSS width of the sidebar
`header`        | node    | Element to render at the top of the page
`footer`        | node    | Element to render at the bottom of the main right column
`router`        | object  | Router object from Next.js

### Theming

The following top-level keys can be used to set theming for the entire application.

Theme key     | Description
--------------|------------
`font`        | Base font-family
`lineHeight`  | Base line-height
`colors`      | Object of colors for `text`, `background`, etc.

#### Colors

Color key     | Description
--------------|------------
`text`        | Foreground text color
`background`  | Background color
`link`        | Link color

Use the `Layout` key in your theme to style the root element.

```js
// example theme.js
export default {
  Layout: {
    color: 'tomato'
  }
}
```

Other elements can be styled with the following keys

Theme key         | Description
------------------|---
`Layout`          | The root element of the component
`LayoutSidebar`   | The left sidebar component
`LayoutOverlay`   | The overlay that appears on small viewports when the menu is open
`LayoutMain`      | The main content area to the right of the sidebar
`LayoutContainer` | Element with max width to center the page contents

## SideNav

The SideNav component can be used in the Layout component's `sidebar` prop to provide navigation links for the `routes` prop.

### Props

Prop            | Type  | Description
----------------|-------|------------
`routes`        | array | Array of routes, provided by the Layout component via context

### Theming

The SideNav links can be styled with the `NavLink` theme key.

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

## Header

The Header component can be used in the Layout component's `header` prop to add a page header at the top.

### Props

Prop          | Type      | Description
--------------|-----------|--------------
`toggleMenu`  | function  | Toggles visibility of menu on mobile, provided via context from the Layout component

### Theming

Theme key     | Description
--------------|-------------
`Header`      | The root element of the component
`MenuButton`  | The hamburger menu button displayed on mobile

---

## Other Components

## Root

The Root component is used in the Layout component to provide `theme` and `components` context and to set base typographic styles.
You do not need to add this component when using the Layout component.

Prop          | Type    | Description
--------------|---------|------------
`theme`       | Object  | Object of styles for theming components
`components`  | Object  | Object of components for MDX and live code examples

## Container

Element for centering content with a max-width.

### Theming

Theme key           | Description
--------------------|-------------
`LayoutContainer`   | The root element with a max-width of `768px`

## LiveCode

Wrapper around [react-live][] for rendering fenced code blocks as live code examples.
Any code block with the `.jsx` language attribute will render a sandbox, with the `components` object in scope.

This component is rendered by the default `components.code` when wrapping an application with the Layout or Root components.

### Props

Prop          | Type    | Description
--------------|---------|------------
`code`        | String  | JSX code string
`components`  | Object  | Object of components to provide in scope

### Theming

The LiveCode component can be customized with the following theme keys.

Theme key       | Description
----------------|------------
`LiveCode`      | The root element
`LivePreview`   | The top element with live component preview
`LiveEditor`    | The code editor
`LiveError`     | Error message that shows when there are syntax errors

[react-live]: https://github.com/FormidableLabs/react-live

## MenuButton

The hamburger icon button displayed on mobile to toggle the visibility of the menu.

### Theming

Theme key     | Description
--------------|-------------
`MenuButton`  | The root button element

## MDX Components

The following components are included in default MDX scope when using the Layout or Root components

- `a`
- `code`
- `pre`


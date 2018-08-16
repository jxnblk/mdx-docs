
# Theming

Every component in mdx-docs can be customized by providing a `theme` prop to the root Layout component.
The `theme` object includes top-level keys for typography and color and keys for adding style objects to specific components.

```js
// example theme.js
export default {
  font: 'Georgia, serif',
  lineHeight: '1.5',
  colors: {
    text: '#111',
    background: '#fff',
    link: '#07c'
  },
  LayoutSidebar: {
    backgroundColor: '#f6f6f6',
    paddingTop: '32px',
    paddingBottom: '32px'
  }
}
```

```jsx
import React from 'react'
import { Layout, SideNav } from 'mdx-docs'
import theme from './theme'
```

```jsx
<Layout
  theme={theme}
  sidebar={<SideNav />}>
  <Component {...page} />
</Layout>
```

## Typography

Key           | Description
--------------|-----------
`font`        | Base font-family
`lineHeight`  | Base line-height

## Colors

Key           | Description
--------------|------------
`text`        | Foreground text color
`background`  | Background color
`link`        | Link color

## Components

All component theme keys accept style objects to apply CSS to the component.

```js
// example theme
export default {
  NavLink: {
    paddingLeft: '32px',
    paddingRight: '32px'
  }
}
```

Key                 | Description
--------------------|------------
`Layout`            | Root element in Layout component
`LayoutSidebar`     | Sidebar element in Layout
`LayoutOverlay`     | Overlay in Layout that is displayed when the menu is open
`LayoutMain`        | Main right column in Layout
`LayoutContainer`   | Centered max-width container in Layout
`NavLink`           | Link element in SideNav
`Pagination`        | Root element in Pagination component
`PaginationLink`    | Link element for previous/next in Pagination
`Header`            | Root element in Header component
`MenuButton`        | Button element in MenuButton hamburger icon component
`LiveCode`          | Root element in LiveCode component
`LivePreview`       | Top element in LiveCode with component preview
`LiveEditor`        | Bottom code editor in LiveCode
`LiveError`         | Error message in LiveCode


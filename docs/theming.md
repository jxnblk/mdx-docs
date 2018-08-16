
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
  Sidebar: {
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
`font`        |
`lineHeight`  |

## Colors

Key           | Description
--------------|------------
`text`        |
`background`  |
`link`        |

## Components

All component theme keys accept style objects to apply CSS to the component.

Key       | Description
----------|------------

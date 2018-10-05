
# mdx-style

Add styles to markdown elements in MDX

```sh
npm i mdx-style
```

```js
import React from 'react'
import MDXStyle from 'mdx-style'
import Doc from './doc.mdx'

export default () =>
  <MDXStyle
    css={{
      root: {
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.625,
        color: '#111'
      },
      h1: {
        fontSize: 48,
        color: 'purple'
      },
      a: {
        color: 'blue',
        '&:hover': {
          color: 'purple'
        }
      }
    }}>
    <Doc />
  </MDXStyle>
```

## Props

- `css`
- `components`

MIT License

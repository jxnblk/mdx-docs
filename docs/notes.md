
# Notes

Why?/defaults

- default layout
- theme
- components
- livecode

always configured:
- components
- navigation
- branding etc
- theme?

```mdx
import * as components from '../src'
import { theme } from '../src'

export { components, theme }

export const navigation = [
  'index',
  'getting-started',
]

# Hello
```

---

Simplify:
- No nested route support
- No layout overrides
- No isolation

- [ ] SideNav subdirectory route name
- [ ] SideNav depth/dirname grouping

```
// _app.js
import { Layout } from 'mdx-docs'
import theme from './theme'

export default (props) =>
  <Layout
    {...props}
    theme={theme}
    navigation={[
      'index',
      'getting-started',
      'api',
    ]}
  />
```

```
// _html.js
import { Html, Head, Body } from 'mdx-docs'

export default ({ children }) =>
  <Html>
    <Head>
      <title>Hello</title>
    </Head>
    <Body>
      {children}
    </Body>
  </Html>
```


---

```
docs/
  _app.js
  _document.js
  index.mdx
```

```js
// default Document
export default ({
  title,
  styles,
  children,
}) =>
  <html>
    <head>
      <meta charSet='utf-8' />
      <title>{title}</title>
      {styles}
    </head>
    <body>
      <Root>
        {children}
      </Root>
    </body>
  </html>
```
---


# mdx-docs

Document and develop React components with MDX

```sh
npm i -D mdx-docs
```

- Create documentation with markdown
- Import and use React components
- Zero-config
- No plugins
- Component-based API
- Customizable themes

## Getting Started

- install
- package run scripts
- mkdir docs
- vi docs/index.mdx
- npm start


---

- [ ] default components
- [ ] unstyled mode
- [ ] live editor
- [ ] Layout
- [ ] HTML Export
- [ ] ScrollTop
- [x] dev cli
- [x] routes
- [x] history api fallback

Customizing

- theme
- components
- sidebar
- Layout

```jsx
// _app.js
import React from 'react'
import { Container } from 'mdx-docs'

export default props =>
  <Container
    theme={}
    components={}
    sidebar={}
    Layout={}
  >
    {props.children}
  </Container>
```

```jsx
// _app.js
import React from 'react'

export default ({
  Container,
  children
}) =>
  <Container
    theme={theme}
    components={components}>
    {children}
  </Container>
```

```jsx
import React from 'react'
import Layout from './_layout'

export default ({
  Container,
  children
}) =>
  <Container theme={theme}>
    <Layout>
      {children}
    </Layout>
  </Container>
```

- App (`_app`)
- Container (providers)


```
App
Router
_app
  ThemeProvider {theme}
  MDXProvider {components}
  DocsProvider (router, components, theme)
_layout
  Layout
```

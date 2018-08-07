import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import defaultComponents from './components'

export default ({
  theme = {},
  components = {},
  children
}) =>
  <ThemeProvider theme={theme}>
    <MDXProvider components={{ ...defaultComponents, ...components }}>
      {children}
    </MDXProvider>
  </ThemeProvider>

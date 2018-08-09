import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import defaultComponents from './components'
import defaultTheme from './themes/base'

export default ({
  theme = {},
  components = {},
  children
}) =>
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <MDXProvider components={{ ...defaultComponents, ...components }}>
      {children}
    </MDXProvider>
  </ThemeProvider>

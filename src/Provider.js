import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import { withRouter } from 'react-router-dom'
import defaultComponents from './components'
import defaultTheme from './themes/base'
import { DocsProvider } from './context'

export class Provider extends React.Component {
  static defaultProps = {
    theme: defaultTheme,
    components: {},
  }

  render () {
    const {
      theme,
      components,
      children
    } = this.props
    const scope = {
      ...defaultComponents,
      ...components
    }

    return (
      <ThemeProvider theme={theme}>
        <MDXProvider components={scope}>
          <DocsProvider {...this.props}>
            {children}
          </DocsProvider>
        </MDXProvider>
      </ThemeProvider>
    )
  }
}

export default Provider

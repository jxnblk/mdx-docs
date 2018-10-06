import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import get from 'lodash.get'
import defaultComponents from './components'
import defaultTheme from './themes/base'

const Typography = styled.div([],
  props => ({
    fontFamily: props.theme.font,
    lineHeight: props.theme.lineHeight,
    color: get(props.theme, 'colors.text'),
    backgroundColor: get(props.theme, 'colors.background'),
  })
)

export default class Root extends React.Component {
  static propTypes = {
    theme: PropTypes.object,
    components: PropTypes.object,
  }

  static defaultProps = {
    theme: defaultTheme
  }

  render () {
    const {
      theme = {},
      components = {},
      children
    } = this.props

    return (
      <ThemeProvider theme={theme}>
        <MDXProvider
          components={{
            ...defaultComponents,
            ...components
          }}>
          <Typography>
            {children}
          </Typography>
        </MDXProvider>
      </ThemeProvider>
    )
  }
}

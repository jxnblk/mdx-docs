import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { themeGet } from 'styled-system'
import defaultTheme from './theme'

export const Root = styled.div`
  font-family: ${themeGet('font', 'sans-serif')};
  line-height: ${themeGet('lineHeight')};
`

export default class extends React.Component {
  static defaultProps = {
    theme: defaultTheme
  }

  render () {
    const { children, ...props } = this.props

    return (
      <ThemeProvider {...props}>
        <Root>
          {children}
        </Root>
      </ThemeProvider>
    )
  }
}

import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const breakpoint = props =>
  `@media screen and (min-width: ${themeGet('breakpoints.0', '40em')(props)})`

const css = key => props => props.theme[key]

const Sidebar = styled(props =>
  <Box
    {...props}
    width={256}
    flex='none'
  />
)([],{
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  height: '100vh',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  transform: 'translateX(-100%)',
},
  props => ({
    [breakpoint(props)]: {
      transform: 'translateX(0)'
    }
  }),
  css('Sidebar'))

const Main = styled(({
  fullWidth,
  ...props
}) =>
  <Box
    {...props}
    width={1}
    pl={fullWidth ? 0 : [ 0, 256 ]}
  />
)([], css('Main'))

const Container = styled(props =>
  <Box
    {...props}
    mx='auto'
    px={3}
    py={4}
    css={{
      maxWidth: '768px'
    }}
  />
)([], css('Container'))

export default class Layout extends React.Component {
  render () {
    const { sidebar, children } = this.props

    return (
      <Flex>
        {sidebar && (
          <Sidebar>
            {sidebar}
          </Sidebar>
        )}
        <Main fullWidth={!sidebar}>
          <Container>
            {children}
          </Container>
        </Main>
      </Flex>
    )
  }
}

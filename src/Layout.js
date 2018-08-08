import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Burger } from 'reline'
import SideNav from './SideNav'
import Pagination from './Pagination'
import { modes } from './constants'

const breakpoint = props =>
  `@media screen and (min-width: ${themeGet('breakpoints.0', '40em')(props)})`

const css = key => props => props.theme[key]

const Sidebar = styled(props =>
  <Box
    {...props}
    width={256}
    flex='none'
    bg='white'
  />
)([],{
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  height: '100vh',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
},
  props => ({
    transitionProperty: 'transform',
    transitionTimingFunction: 'ease-out',
    transitionDuration: '.125s',
    transform: props.open ? 'translateX(0)' : 'translateX(-100%)',
    [breakpoint(props)]: {
      transform: 'translateX(0)'
    }
  }),
  css('Sidebar'))

const Overlay = styled.div([], {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})

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
    px={[ 3, 4 ]}
    py={4}
    css={{
      maxWidth: '768px'
    }}
  />
)([], css('Container'))

const MenuButton = styled.button([], {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: '8px',
  width: '32px',
  height: '32px',
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: '4px',
  '&:focus': {
    // outline: 'none',
  }
},
  props => ({
    [breakpoint(props)]: {
      display: 'none'
    }
  }),
)

const Root = styled(Flex)([], css('Layout'))

export default class Layout extends React.Component {
  static defaultProps = {
    // sidebar: <SideNav />,
    // pagination: <Pagination />
  }
  state = {
    menu: false
  }

  toggleMenu = () => {
    this.setState(state => ({
      menu: !state.menu
    }))
  }

  render () {
    const {
      mode,
      routes,
      // todo
      sidebar,
      pagination,
      children
    } = this.props
    const { menu } = this.state

    if (mode === modes.isolate) {
      return (
        <React.Fragment>
          {children}
        </React.Fragment>
      )
    }

    return (
      <Root>
        {(
          <React.Fragment>
            <MenuButton
              title='Show Menu'
              onClick={this.toggleMenu}>
              <Burger />
            </MenuButton>
            {menu && (
              <Overlay
                onClick={this.toggleMenu}
              />
            )}
            <Sidebar
              open={menu}
              onClick={this.toggleMenu}>
              <SideNav
                order={routes.navigation}
              />
            </Sidebar>
          </React.Fragment>
        )}
        <Main fullWidth={!sidebar}>
          <Container>
            {children}
            <Pagination
              order={routes.navigation}
            />
          </Container>
        </Main>
      </Root>
    )
  }
}

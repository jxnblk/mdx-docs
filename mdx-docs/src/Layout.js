import React from 'react'
import styled from 'styled-components'
import Root from './Root'

/*
 * - [ ] focus trap
 */

const css = key => props => props.theme[key]

export const Flex = styled.div([], {
  display: 'flex'
},
  css('Layout')
)

export const SidebarRoot = styled.div([], {
  backgroundColor: 'white',
  position: 'fixed',
  left: 0,
  bottom: 0,
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  transitionProperty: 'transform',
  transitionDuration: '.2s',
  transitionTimingFunction: 'ease-out',
},
  props => ({
    '@media screen and (max-width: 40em)': {
      transform: `translateX(${props.open ? '0' : '-100%'})`
    }
  }),
  props => props.css,
  css('LayoutSidebar')
)

SidebarRoot.defaultProps = {
  css: {
    top: 0,
    width: '256px'
  }
}

export const Overlay = styled.div([], {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
},
  css('LayoutOverlay')
)

export const SidebarSpacer = styled.div([], {
  flex: 'none',
  display: 'none',
  '@media screen and (min-width: 40em)': {
    display: 'block'
  }
}, props => props.css)

SidebarSpacer.defaultProps = {
  css: {
    width: '256px'
  }
}

export const Sidebar = ({
  open,
  onDismiss,
  children,
}) =>
  <React.Fragment>
    {open && <Overlay onClick={onDismiss} />}
    <SidebarSpacer />
    <SidebarRoot
      open={open}
      onClick={onDismiss}>
      {children}
    </SidebarRoot>
  </React.Fragment>

export const Main = styled.div([],
  css('LayoutMain')
)

export const Container = styled.div([], {
  marginLeft: 'auto',
  marginRight: 'auto',
  outline: '1px solid tomato',
  padding: '16px',
  maxWidth: '768px'
}, css('LayoutContainer'))

export class Layout extends React.Component {
  state = {
    menu: false
  }

  toggleMenu = () => this.setState(state => ({
    menu: !state.menu
  }))

  closeMenu = () => this.setState({ menu: false })

  render () {
    const {
      theme,
      components,
      sidebar,
      header,
      pagination,
      children
    } = this.props
    const { menu } = this.state

    return (
      <Root
        theme={theme}
        components={components}>
        {header}
        <Flex>
          {sidebar && (
            <Sidebar
              open={menu}
              onDismiss={this.closeMenu}>
              {sidebar}
            </Sidebar>
          )}
          <Main>
            <Container>
              {children}
              {pagination}
            </Container>
          </Main>
        </Flex>
      </Root>
    )
  }
}

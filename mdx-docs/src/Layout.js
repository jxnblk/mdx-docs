import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Root from './Root'
import MenuButton from './MenuButton'
import Container from './Container'
import { DocsContext } from './context'
import css from './css'

export const Flex = styled.div([], {
  display: 'flex',
  width: '100%'
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
    transform: `translateX(${props.open ? '0' : '-100%'})`,
    '@media screen and (min-width: 40em)': {
      transform: 'none'
    }
  }),
  props => props.css,
  css('LayoutSidebar')
)

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

export const Sidebar = ({
  open,
  onDismiss,
  children,
  top = 0,
  width = '256px'
}) =>
  <React.Fragment>
    {open && <Overlay onClick={onDismiss} />}
    <SidebarSpacer
      css={{ width }}
    />
    <SidebarRoot
      open={open}
      onClick={onDismiss}
      css={{ width, top }}>
      {children}
    </SidebarRoot>
  </React.Fragment>

export const Main = styled.div([], {
  width: '100%',
  minHeight: '100vh'
},
  css('LayoutMain')
)

export const Fixed = styled.div([], {
  position: 'fixed',
}, ({ children, ...props }) => props)

export class Layout extends React.Component {
  static propTypes = {
    routes: PropTypes.array,
    router: PropTypes.shape({
      pathname: PropTypes.string
    }),
    theme: PropTypes.object,
    components: PropTypes.object,
    sidebar: PropTypes.node,
    header: PropTypes.node,
    pagination: PropTypes.node,
    sidebarWidth: PropTypes.number,
  }

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
      routes,
      router,
      sidebarWidth,
      children
    } = this.props
    const { menu } = this.state

    const route = routes.find(route => route.path === router.pathname) || {}

    const context = {
      ...this.state,
      toggleMenu: this.toggleMenu,
      closeMenu: this.closeMenu,
      routes,
      route
    }

    return (
      <DocsContext.Provider value={context}>
        {sidebar && !header && (
          <Fixed>
            <MenuButton />
          </Fixed>
        )}
        <Root
          theme={theme}
          components={components}>
          {header}
          <Flex>
            {sidebar && (
              <Sidebar
                open={menu}
                onDismiss={this.closeMenu}
                top={header ? '48px' : undefined}
                width={sidebarWidth}>
                {sidebar}
              </Sidebar>
            )}
            <Main>
              <Container>
                {children}
              </Container>
              {pagination}
            </Main>
          </Flex>
        </Root>
      </DocsContext.Provider>
    )
  }
}

export default Layout

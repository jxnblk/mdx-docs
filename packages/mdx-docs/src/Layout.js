import React from 'react'
import PropTypes from 'prop-types'
import MDXStyle from 'mdx-style'
import objectStyle from 'object-style'
import { base as baseTheme } from 'mdx-style/themes'
import { DocsContext, withDocs } from './context'
import defaultComponents from './components'

const rules = []
const join = (...args) => args.join(' ')

const styled = Tag => style => props => {
  const rule = objectStyle(style)
  rules.push(...rule.rules)
  return <Tag {...props} className={join(props.className, rule.className)} />
}

const breakpoint = '@media screen and (min-width: 40em)'

export const Flex = styled('div')({
  display: 'flex',
  width: '100%'
})

const SidebarRoot = styled('div')({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  overflowY: 'auto',
  paddingTop: '32px',
  paddingBottom: '32px',
  // WebkitOverflowScrolling: 'touch',
  [breakpoint]: {
    transform: 'none !important',
    transitionProperty: 'transform',
    transitionDuration: '.2s',
    transitionTimingFunction: 'ease-out',
  }
})

const _SidebarRoot = styled(({
  width,
  open,
  style,
  color,
  bg,
  ...props
}) =>
  <div
    {...props}
    style={{
      width,
      transform: open ? 'none' : 'translateX(-100%)',
      color,
      backgroundColor: bg,
      ...style,
    }}
  />
)({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  overflowY: 'auto',
  paddingTop: '32px',
  paddingBottom: '32px',
  WebkitOverflowScrolling: 'touch',
  [breakpoint]: {
    transform: 'none !important',
    transitionProperty: 'transform',
    transitionDuration: '.2s',
    transitionTimingFunction: 'ease-out',
  }
})

SidebarRoot.defaultProps = {
  width: 256,
  bg: '#f6f6ff'
}

const SidebarSpacer = styled(({
  width,
  ...props
}) =>
  <div
    {...props}
    style={{
      width
    }}
  />
)({
  display: 'none',
  [breakpoint]: {
    display: 'block'
  }
})

SidebarSpacer.defaultProps = {
  width: 256,
}

const Overlay = styled('div')({
  display: 'block',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  [breakpoint]: {
    display: 'none'
  },
})

export const Sidebar = withDocs(({
  layout: {
    open,
    openMenu,
    closeMenu,
    toggleMenu,
    update,
  },
  width,
  ...props
}) =>
  <React.Fragment>
    {open && <Overlay onClick={closeMenu} />}
    <SidebarSpacer width={width} />
    <SidebarRoot
      onClick={closeMenu}
      {...props}
      width={width}
      open={open}
    />
  </React.Fragment>
)

Sidebar.defaultProps = {
  width: 256,
}

const MainRoot = props =>
  <div
    {...props}
    style={{
      width: '100%',
      minWidth: 0,
      minHeight: '100vh'
    }}
  />

const MainContainer = props =>
  <div
    {...props}
    style={{
      maxWidth: 768,
      padding: 32,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  />

export const Main = props =>
  <MainRoot>
    <MainContainer {...props} />
  </MainRoot>

export const MenuIcon = ({
  size = 24,
  ...props
}) =>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={size}
    height={size}
    style={{
      display: 'block'
    }}>
    <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
  </svg>

export const MenuButton = ({
  m,
  style,
  ...props
}) =>
  <button
    {...props}
    style={{
      position: 'fixed',
      appearance: 'none',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      display: 'inline-block',
      border: 0,
      borderRadius: 0,
      padding: 0,
      margin: m,
      color: 'inherit',
      backgroundColor: 'transparent',
      ...style
    }}
  />

MenuButton.defaultProps = {
  m: 8
}

export const MenuToggle = withDocs(({
  layout: {
    toggleMenu,
    closeMenu,
    openMenu,
    update,
    open,
  },
  children,
  ...props
}) => typeof children === 'function'
  ? children({ open, toggleMenu })
  : (
    <MenuButton
      {...props}
      onClick={toggleMenu}>
      {children}
    </MenuButton>
  ))

MenuToggle.defaultProps = {
  title: 'Toggle Menu',
  children: <MenuIcon />
}

MenuToggle.isMenuToggle = true

const NavbarRoot = ({
  height,
  ...props
}) =>
  <header
    {...props}
    style={{
      height,
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
    }}
  />

const NavbarSpacer = ({ height }) =>
  <div style={{ height }} />

export const Navbar = ({
  height,
  ...props
}) =>
  <React.Fragment>
    <NavbarSpacer height={height} />
    <NavbarRoot
      {...props}
      height={height}
    />
  </React.Fragment>

Navbar.defaultProps = {
  height: 48,
}

Navbar.isNavbar = true

export const toggle = state => ({ open: !state.open })
export const close = state => ({ open: false })
export const open = state => ({ open: true })

export const getNextRoute = props => props.routes.find(route => route.path === props.router.pathname) || {}
export const getReachRoute = props => props.routes.find(route => route.path === props.location) || {}

const style = <style
  dangerouslySetInnerHTML={{
    __html: rules.join('')
  }}
/>

export class Layout extends React.Component {
  static Sidebar = Sidebar
  static Main = Main
  static MenuToggle = MenuToggle
  static Navbar = Navbar

  static propTypes = {
    routes: PropTypes.array.isRequired,
    getRoute: PropTypes.func.isRequired,
  }

  static defaultProps = {
    getRoute: getNextRoute,
  }

  state = {
    open: false,
    update: fn => this.setState(fn),
  }

  render () {
    const {
      routes = [],
      components = {},
      theme = {},
      getRoute,
      ...props
    } = this.props

    const route = getRoute(this.props)

    const context = {
      layout: {
        ...this.state,
        toggleMenu: () => this.state.update(toggle),
        openMenu: () => this.state.update(open),
        closeMenu: () => this.state.update(close),
      },
      routes,
      route
    }

    const children = React.Children.toArray(this.props.children)
    const columns = children.filter(child => !child.type.isNavbar && !child.type.isMenuToggle)
    const [ navbar ] = children.filter(child => child.type.isNavbar)
    const [ menuToggle ] = children.filter(child => child.type.isMenuToggle)

    return (
      <DocsContext.Provider value={context}>
        {style}
        {menuToggle}
        {navbar}
        <MDXStyle
          css={baseTheme}
          components={{
            ...defaultComponents,
            ...components
          }}
          {...props}>
          <Flex>
            {columns}
          </Flex>
        </MDXStyle>
      </DocsContext.Provider>
    )
  }
}

export default Layout

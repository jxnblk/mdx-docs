import React from 'react'
import PropTypes from 'prop-types'
import MDXStyle from 'mdx-style'
import { base as baseTheme } from 'mdx-style/themes'
import { DocsContext, withDocs } from './context'
import defaultComponents from './components'

const MediaContext = React.createContext()

export const withMedia = Component => React.forwardRef((props, ref) =>
  <MediaContext.Consumer
    children={media => (
      <Component
        {...props}
        ref={ref}
        media={media}
      />
    )}
  />
)

export const MediaConsumer = MediaContext.Consumer

export class MediaProvider extends React.Component {
  static propTypes = {
    mediaQueries: PropTypes.object.isRequired,
  }

  state = {
    matches: []
  }

  listeners = []

  handleChange = name => e => {
    const { matches } = this.state
    if (e.matches && matches.indexOf(name) > -1) return
    if (e.matches) {
      this.setState(state => ({
        matches: [
          ...state.matches,
          name
        ]
      }))
    } else {
      this.setState(state => ({
        matches: state.matches.filter(n => n !== name)
      }))
    }
  }

  registerListener = ({ name, value }) => {
    const handleChange = this.handleChange(name)
    const matcher = window.matchMedia(value)
    const listener = matcher.addListener(handleChange)
    if (matcher.matches) {
      this.setState(state => ({ matches: [ ...state.matches, name ] }))
    }
    this.listeners.push({ matcher, listener })
  }

  removeListeners = () => {
    this.listeners.forEach(({ matcher, listener }) => {
      matcher.removeListener(listener)
    })
  }

  componentDidMount () {
    const { mediaQueries } = this.props
    Object.keys(mediaQueries)
      .map(name => ({ name, value: mediaQueries[name] }))
      .forEach(this.registerListener)
  }

  componentWillUnmount () {
    this.removeListeners()
  }

  render () {
    const {
      mediaQueries,
      ...props
    } = this.props
    const { matches } = this.state
    const context = { matches }
    matches.forEach(name => {
      context[name] = true
    })

    return (
      <MediaContext.Provider
        {...props}
        value={context}
      />
    )
  }
}

export const Flex = props =>
  <div
    {...props}
    style={{
      display: 'flex',
      width: '100%'
    }}
  />

const SidebarRoot = withMedia(({
  width,
  open,
  style,
  media,
  color,
  bg,
  ...props
}) =>
  <div
    {...props}
    style={{
      width,
      transform: (open || media.small) ? 'none' : 'translateX(-100%)',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      overflowY: 'auto',
      paddingTop: 32,
      paddingBottom: 32,
      color,
      backgroundColor: bg,
      WebkitOverflowScrolling: 'touch',
      ...(!media.small ? {
        transitionProperty: 'transform',
        transitionDuration: '.2s',
        transitionTimingFunction: 'ease-out',
      } : {}),
      ...style,
    }}
  />
)

SidebarRoot.defaultProps = {
  width: 256,
  bg: '#f6f6ff'
}

const SidebarSpacer = withMedia(({
  media,
  ...props
}) =>
  <div
    {...props}
    style={{
      display: media.small ? 'block' : 'none',
      flex: 'none',
      width: props.width,
    }}
  />
)

SidebarSpacer.defaultProps = {
  width: 256,
}

const Overlay = withMedia(({
  media,
  ...props
}) =>
  <div
    {...props}
    style={{
      display: media.small ? 'none' : 'block',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    }}
  />
)

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

export class Layout extends React.Component {
  static Sidebar = Sidebar
  static Main = Main
  static MenuToggle = MenuToggle
  static Navbar = Navbar

  state = {
    open: false,
    update: fn => this.setState(fn),
  }

  render () {
    const {
      breakpoint,
      routes = [],
      router = {},
      components = {},
      theme = {},
      ...props
    } = this.props

    const route = routes.find(route => route.path === router.pathname) || {}
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
        <MediaProvider
          mediaQueries={{
            'small': 'screen and (min-width:40em)'
          }}>
          {menuToggle}
          {navbar}
          <MDXStyle
            css={{
              ...baseTheme,
              // todo: fix
              code: {},
              // ...theme
            }}
            components={{
              ...defaultComponents,
              ...components
            }}
            {...props}>
            <Flex>
              {columns}
            </Flex>
          </MDXStyle>
        </MediaProvider>
      </DocsContext.Provider>
    )
  }
}

export default Layout

import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grid-styled'

const Root = ({ open, ...props }) =>
  <Box
    width={256}
    bg='white'
    {...props}
    flex='none'
    css={{
      position: 'fixed',
      top: '48px',
      left: 0,
      bottom: 0,
      boxShadow: '1px 0 0 0 rgba(0, 0, 0, .125)',
      height: 'calc(100vh - 48px)',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      transition: 'transform .2s ease-out',
      '@media screen and (max-width: 40em)': {
        transform: `translateX(${open ? '0' : '-100%'})`
      },
    }}
  />

const Overlay = props =>
  <Box
    {...props}
    css={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }}
  />

const Spacer = props =>
  <Box
    width={256}
    flex='none'
    {...props}
    css={{
      display: 'none',
      '@media screen and (min-width: 40em)': {
        display: 'block'
      }
    }}
  />

export default class SideBar extends React.Component {
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    toggleMenu: PropTypes.func.isRequired,
    closeMenu: PropTypes.func.isRequired
  }

  render () {
    const {
      menu,
      toggleMenu,
      closeMenu,
      routes,
      Link,
    } = this.props

    return (
      <React.Fragment>
        {menu && <Overlay onClick={closeMenu} />}
        <Spacer />
        <Root
          open={menu}
          onClick={closeMenu}>
          <ul>
            {routes.map(route => (
              <li key={route.path}>
                <Link href={route.path}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </Root>
      </React.Fragment>
    )
  }
}

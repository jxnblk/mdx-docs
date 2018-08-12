import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import div from 'clean-tag'
import { Burger } from 'reline'

const Root = props =>
  <Flex
    {...props}
    bg='white'
    css={{
      position: 'fixed',
      zIndex: 1,
      top: 0,
      right: 0,
      left: 0,
      height: '48px',
      boxShadow: '0 0 0 1px rgba(0, 0, 0, .125)'
    }}
  />

const MobileOnly = props =>
  <Box
    {...props}
    css={{
      '@media screen and (min-width: 40em)': {
        display: 'none'
      }
    }}
  />

const MenuButton = props =>
  <MobileOnly>
    <Box
      {...props}
      is='button'
      m={0}
      p={2}
      css={{
        appearance: 'none',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        color: 'inherit',
        backgroundColor: 'transparent',
        border: 'none'
      }}>
      <Burger />
    </Box>
  </MobileOnly>

const NavLink = styled(div.a)`
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
  padding: 8px;
  color: inherit;
`

export default class SideBar extends React.Component {
  static propTypes = {
    logo: PropTypes.func,
    title: PropTypes.string,
    Link: PropTypes.func.isRequired,
    toggleMenu: PropTypes.func.isRequired
  }

  static defaultProps = {
  }

  render () {
    const {
      title,
      logo,
      Link,
      toggleMenu
    } = this.props

    return (
      <React.Fragment>
        <Root px={2} py={1} alignItems='center'>
          <MenuButton
            title='Menu'
            onClick={toggleMenu}
            mr={3}
          />
          {logo}
          <NavLink is={Link} href='/'>
            {title}
          </NavLink>
          <Box mx='auto' />
        </Root>
        <Box css={{ height: '48px' }} />
      </React.Fragment>
    )
  }
}

import React from 'react'
import styled from 'styled-components'
import MenuIcon from 'rmdi/lib/Menu'
import { withDocs } from './context'

const Button = styled.button([], {
  appearance: 'none',
  margin: 0,
  padding: '4px',
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: '4px',
  '&:focus': {
    outline: 'none'
  },
  '@media screen and (min-width: 40em)': {
    display: 'none'
  }
}, props => props.theme.MenuButton)

export default withDocs(({
  toggleMenu,
}) => (
  <Button
    title='Toggle Menu'
    onClick={toggleMenu}>
    <MenuIcon
    />
  </Button>
))

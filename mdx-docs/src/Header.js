import React from 'react'
import styled from 'styled-components'
import MenuButton from './MenuButton'
import css from './css'

const Root = styled.div([], {
  display: 'flex',
  alignItems: 'center',
  height: '48px',
}, css('Header'))

export default ({
  children
}) =>
  <Root>
    <MenuButton />
    {children}
  </Root>

import React from 'react'
import styled from 'styled-components'
import MenuButton from './MenuButton'
import css from './css'

const Root = styled.div([], {
  display: 'flex',
  alignItems: 'center',
  height: '48px',
}, css('Header'))

const FixedRoot = styled.div([], {
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0
})

const Fixed = ({ fixed, ...props }) => fixed
  ? <FixedRoot {...props} />
  : <React.Fragment {...props} />

export default ({
  fixed,
  children
}) =>
  <Fixed fixed={fixed}>
    <Root>
      <MenuButton />
      {children}
    </Root>
  </Fixed>

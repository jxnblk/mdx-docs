import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import get from 'lodash.get'
import LiveCode from './LiveCode'
import css from './css'

export const a = ({ href, ...props }) =>
  <NextLink href={href}>
    <a {...props} />
  </NextLink>

export const Pre = styled.pre([], {
  fontFamily: 'Menlo, monospace',
  fontSize: '13px',
  overflowX: 'auto',
  maxWidth: '100%',
}, css('pre'))

export const inlineCode = styled.code([], {
  fontFamily: 'Menlo, monospace',
  fontSize: '81.25%',
}, css('code'))

export const pre = props => props.children

export const code = ({
  children,
  className = '',
  ...props
}) => {
  const isEditable = className.includes('language-.jsx')
  const code = React.Children.toArray(children).join('\n')
  if (isEditable) {
    return (
      <LiveCode code={code} />
    )
  }
  return (
    <Pre
      {...props}
      className={className}
      children={children}
    />
  )
}

export const components = {
  a,
  pre,
  code,
  inlineCode,
}

export default components

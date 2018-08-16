import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import get from 'lodash.get'
import LiveCode from './LiveCode'
import css from './css'

// Link
export const a = styled(({ children, className, ...props }) =>
  <NextLink {...props}>
    <a className={className}>
      {children}
    </a>
  </NextLink>
)([], props => ({
  color: get(props.theme, 'colors.link')
}), css('a'))

export const Pre = styled.pre([], {
  fontFamily: 'Menlo, monospace',
  fontSize: '13px'
}, css('pre'))

export const pre = props => props.children

export const code = ({
  children,
  className = '',
  ...props
}) => {
  const lang = className.replace(/^language\-/, '')
  const isEditable = lang === '.jsx'
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
}

export default components

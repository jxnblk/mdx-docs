import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import get from 'lodash.get'
import isAbsoluteURL from 'is-absolute-url'
import LiveCode from './LiveCode'
import css from './css'
import { withDocs } from './context'

// remove with react-router support
const isProd = process.env.NODE_ENV === 'production'

// Link
export const a = NextLink
export const __a = styled(withDocs(({
  children,
  className,
  // remove props from context
  // this can be removed with react-router support
  basepath,
  href,
  menu,
  toggleMenu,
  closeMenu,
  routes,
  route,
  ...props
}) =>
  <NextLink
    {...props}
    href={href}
    as={isProd && !isAbsoluteURL(href) ? basepath + href : href}>
    <a className={[className, (href === route.path && 'active')].filter(Boolean).join(' ')}>
      {children}
    </a>
  </NextLink>
))([], props => ({
  color: get(props.theme, 'colors.link')
}), css('a'))

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
  inlineCode,
}

export default components

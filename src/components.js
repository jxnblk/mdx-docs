import React from 'react'
import styled from 'styled-components'
import * as Router from 'react-router-dom'
import isAbsoluteURL from 'is-absolute-url'
import LiveEditor from './LiveEditor'

const css = key => props => props.theme[key]

const HeadingLink = styled.a([], {
  color: 'inherit',
  textDecoration: 'none'
})

const heading = Tag => ({ children, ...props }) =>
  <Tag {...props}>
    <HeadingLink href={'#' + props.id}>
      {children}
    </HeadingLink>
  </Tag>

const BaseLink = ({
  href,
  ...props
}) => isAbsoluteURL(href)
  ? <a href={href} {...props} />
  : <Router.Link to={href} {...props} />

export const NavLink = styled(Router.NavLink)([], css('NavLink'))

const h1 = styled(heading('h1'))([], css('h1'))
const h2 = styled(heading('h2'))([], css('h2'))
const h3 = styled(heading('h3'))([], css('h3'))
const h4 = styled(heading('h4'))([], css('h4'))
const h5 = styled(heading('h5'))([], css('h5'))
const h6 = styled(heading('h6'))([], css('h6'))

const p = styled.p([], css('p'))
const a = styled(BaseLink)([], css('a'))
const ul = styled.ul([], css('ul'))
const ol = styled.ol([], css('ol'))
const li = styled.li([], css('li'))
const blockquote = styled.li([], css('blockquote'))
const table = styled.li([], css('table'))

const inlineCode = styled.code([], css('code'))
const Pre = styled.pre([], css('pre'))
const pre = props => props.children

// live code
const code = ({
  children,
  className = '',
  ...props
}) => {
  const lang = className.replace(/^language\-/, '')
  const isEditable = lang === '.jsx'
  const code = React.Children.toArray(children).join('\n')
  if (isEditable) {
    return (
      <LiveEditor
        code={code}
      />
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

export default {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  ul,
  ol,
  li,
  blockquote,
  table,
  inlineCode,
  pre,
  code,
}

import React from 'react'
import styled from 'styled-components'
import get from 'lodash.get'
import { withMDXLive } from 'mdx-live'
import css from './css'

export const a = ({ as: Tag = 'a', ...props }) =>
  <Tag {...props} />

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
export const code = withMDXLive(Pre)

export const components = {
  a,
  pre,
  code,
  inlineCode,
}

export default components

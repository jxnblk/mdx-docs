import React from 'react'
import get from 'lodash.get'
import { withMDXLive } from 'mdx-live'

export const a = ({ as: Tag = 'a', ...props }) =>
  <Tag {...props} />

export const Pre = props =>
  <pre
    {...props}
    style={{
      fontFamily: 'Menlo, monospace',
      fontSize: '13px',
      overflowX: 'auto',
      maxWidth: '100%',
    }}
  />

export const inlineCode = props =>
  <code
    {...props}
    style={{
      fontFamily: 'Menlo, monospace',
      fontSize: '81.25%',
    }}
  />

export const pre = props => props.children
export const code = withMDXLive(Pre)

export const components = {
  a,
  pre,
  code,
  inlineCode,
}

export default components

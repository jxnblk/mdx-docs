import React from 'react'
import get from 'lodash.get'
import { withMDXLive } from 'mdx-live'

export const a = ({ as: Tag = 'a', ...props }) =>
  <Tag {...props} />

export const code = props =>
  <code
    {...props}
    style={{
      fontFamily: 'Menlo, monospace',
      fontSize: '81.25%',
    }}
  />

export const pre = withMDXLive('pre')

export const components = {
  a,
  pre,
  // code,
}

export default components

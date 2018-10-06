import React from 'react'
import { withMDXLive } from 'mdx-live'

export const a = ({ as: Tag = 'a', ...props }) =>
  <Tag {...props} />

export const pre = withMDXLive('pre')

export const components = {
  a,
  pre,
}

export default components

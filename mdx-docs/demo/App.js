import React from 'react'
import {
  Root,
  Layout,
} from '../src'
import Hello from './hello.mdx'

export default () =>
  <Layout
    sidebar={<pre>Sidebar</pre>}
  >
    <h1>Hello</h1>
    <Hello />
  </Layout>

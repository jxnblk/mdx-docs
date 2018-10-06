import React from 'react'
import TestRenderer from 'react-test-renderer'
import mdx from '@mdx-js/mdx'
import { transform } from '@babel/core'
import {
  LiveCode,
  withMDXLive,
  MDXLiveProvider,
  withMDXComponents
} from '../src'

const code = '<h1>hello</h1>'
const createNodeMock = () => ({
  innerHTML: code
})

const renderJSON = el => TestRenderer.create(el, {
  createNodeMock
}).toJSON()

describe('LiveCode', () => {
  test('renders', () => {
    const json = renderJSON(
      <LiveCode
        code={code}
      />
    )
    expect(json).toMatchSnapshot()
  })
})

describe('withMDXLive', () => {
  const Pre = withMDXLive('pre')
  test('renders normal tag', () => {
    const json = renderJSON(
      <Pre children={code} />
    )
    expect(json).toMatchSnapshot()
  })

  test('renders LiveCode', () => {
    const json = renderJSON(
      <Pre children={code} className='language-.jsx' />
    )
    expect(json).toMatchSnapshot()
  })
})

describe('MDXLiveProvider', () => {
  let expected
  const Demo = withMDXComponents(({ components, ...props }) => {
    expected = components
    return false
  })

  test('provides custom scope', () => {
    const json = renderJSON(
      <MDXLiveProvider>
        <Demo />
      </MDXLiveProvider>
    )
    expect(typeof expected).toBe('object')
    expect(expected.pre({ children: 'passthrough' })).toBe('passthrough')
  })
})

import React from 'react'
import TestRenderer from 'react-test-renderer'
import MDXStyle, { withComponents } from '../src'

const renderJSON = el => TestRenderer.create(el).toJSON()

describe('MDXStyle', () => {
  test('renders', () => {
    expect(() => {
      renderJSON(
        <MDXStyle />
      )
    }).not.toThrow()
  })

  test('renders with css', () => {
    const json = renderJSON(
      <MDXStyle
        css={{
          root: {
            color: 'tomato'
          },
          h1: {
            fontSize: '32px'
          }
        }}>
        <h1>Hello</h1>
      </MDXStyle>
    )
    expect(json).toMatchSnapshot()
  })

  test('adds styles to custom MDX components', () => {
    const components = {
      h1: props => <h1 {...props} id='test' />
    }
    const Heading = withComponents(({
      components,
      ...props
    }) => {
      return React.createElement(components.h1, props)
    })
    const json = renderJSON(
      <MDXStyle
        components={components}
        css={{
          h1: {
            color: 'tomato'
          }
        }}>
        <Heading>Hello</Heading>
      </MDXStyle>
    )
    const [ style, root ] = json
    const [ h1 ] = root.children
    expect(h1.props.className).toBeTruthy()
    expect(h1.props.id).toBe('test')
    expect(style.props.dangerouslySetInnerHTML.__html).toMatch(/color:tomato/)
  })
})

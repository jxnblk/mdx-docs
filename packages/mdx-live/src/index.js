import React from 'react'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from 'react-live'
import { MDXProvider } from '@mdx-js/tag'
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'
export { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'

export const LiveCode = withMDXComponents(({
  previewStyle = {},
  editorStyle = {},
  errorStyle = {},
  previewProps = {},
  editorProps = {},
  errorProps = {},
  components,
  scope,
  ...props
}) =>
  <LiveProvider
    scope={{
      ...components,
      ...scope
    }}
    style={{
      border: '1px solid #f3f3f9',
      borderRadius: 2,
      marginTop: '1em',
      marginBottom: '1em',
      ...props.style
    }}
    {...props}>
    <LivePreview
      {...previewProps}
      style={{
        padding: '1em',
        ...previewStyle
      }}
    />
    <LiveEditor
      {...editorProps}
      style={{
        fontFamily: 'Menlo, monospace',
        fontSize: 14,
        padding: '1em',
        margin: 0,
        backgroundColor: '#f6f6ff',
        overflowX: 'auto',
        outline: 'none',
        ...editorStyle
      }}
    />
    <LiveError
      {...errorProps}
      style={{
        fontFamily: 'Menlo, monospace',
        fontSize: 14,
        padding: '1em',
        overflowX: 'auto',
        color: 'white',
        backgroundColor: 'red',
        ...errorStyle
      }}
    />
  </LiveProvider>
)

LiveCode.defaultProps = {
  mountStylesheet: false,
  transformCode: src => `<React.Fragment>${src}</React.Fragment>`
}

const REG = /language\-\.jsx/

export const withMDXLive = Fallback => ({
  match = REG,
  children,
  metaString,
  ...props
}) => {
  const isLive = match.test(props.className)
  if (!isLive) return <Fallback {...props} children={children} />

  const code = React.Children.toArray(children).join('\n')

  return (
    <LiveCode
      {...props}
      code={code}
    />
  )
}

export const MDXLiveProvider = ({ components, ...props }) =>
  <MDXProvider
    components={{
      ...components,
      pre: props => props.children,
      code: withMDXLive('pre'),
    }}
    {...props}
  />

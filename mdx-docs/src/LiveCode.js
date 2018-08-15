import React from 'react'
import styled from 'styled-components'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError,
} from 'react-live'
import withComponents from './withComponents'

const css = key => props => props.theme[key]
const transformCode = src => `<React.Fragment>${src}</React.Fragment>`

const Root = styled.div([], css('LiveCode'))
const Preview = styled(LivePreview)([], css('LivePreview'))
const Editor = styled(LiveEditor)([], {
  margin: 0,
  fontFamily: 'Menlo, monospace',
  fontSize: '14px'
},
  css('LiveEditor')
)
const Err = styled(LiveError)([], css('LiveError'))

export default withComponents(({
  components,
  code,
  ...props
}) => (
  <LiveProvider
    scope={components}
    code={code}
    transformCode={transformCode}
    mountStylesheet={false}>
    <Root>
      <Preview />
      <Editor />
      <Err />
    </Root>
  </LiveProvider>
))

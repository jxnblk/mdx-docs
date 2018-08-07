import React from 'react'
import styled from 'styled-components'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError,
} from 'react-live'
import { withDocs } from './context'

const css = key => props => props.theme[key]
const transformCode = src => `<React.Fragment>${src}</React.Fragment>`

const Root = styled.div([], css('EditableCode'))
const Preview = styled(LivePreview)([], css('LivePreview'))
const Editor = styled(LiveEditor)([], {
  margin: 0,
  fontFamily: 'Menlo, monospace',
  fontSize: '14px'
},
  css('LiveEditor')
)
const Err = styled(LiveError)([], css('LiveError'))

export default withDocs(({
  docs: {
    components,
  } = {},
  code,
  ...props
}) => (
  <LiveProvider
    scope={components}
    code={code}
    transformCode={transformCode}
    mountStylesheet={false}
  >
    <Root>
      <Preview />
      <Editor />
      <Err />
    </Root>
  </LiveProvider>
))

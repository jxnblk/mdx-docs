import React from 'react'
import {
  LiveProvider,
  LivePreview
} from 'react-live'
import withComponents from './withComponents'

const transformCode = src => `<React.Fragment>${src}</React.Fragment>`

export default withComponents(({
  components = {},
  examples = []
}) => {
  return (
    <React.Fragment>
      {examples
        .filter(({ lang }) => /jsx/.test(lang))
        .map(({ lang, value }, i) => (
        <LiveProvider
          key={value + i}
          scope={components}
          code={value}
          mountStylesheet={false}
          transformCode={transformCode}>
          <LivePreview />
        </LiveProvider>
      ))}
    </React.Fragment>
  )
})

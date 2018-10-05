import React from 'react'

export const DocsContext = React.createContext()

export const withDocs = Component => React.forwardRef((props, ref) => (
  <DocsContext.Consumer
    children={layout => (
      <Component
        ref={ref}
        {...props}
        {...layout}
      />
    )}
  />
))

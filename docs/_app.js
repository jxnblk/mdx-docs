import React from 'react'
import { Box } from 'grid-styled'
import { Provider, Layout } from '../src'
import * as Rebass from 'rebass'

const sidebar = (
  <pre>sidebar</pre>
)

const theme = {
  LiveEditor: {
    color: 'magenta',
    backgroundColor: 'black'
  }
}

export default ({ children, ...props }) =>
  <Provider components={Rebass} theme={theme}>
    <Rebass.Provider>
      <Layout sidebar={sidebar}>
        {children}
      </Layout>
    </Rebass.Provider>
  </Provider>

import React from 'react'
import { Box } from 'grid-styled'
import { Provider, Layout } from '../src'
import * as Rebass from 'rebass'

const sidebar = (
  <pre>sidebar</pre>
)

export default ({ children, ...props }) =>
  <Provider {...props}
    components={Rebass}
  >
    <Rebass.Provider>
      <Layout sidebar={sidebar}>
        {children}
      </Layout>
    </Rebass.Provider>
  </Provider>

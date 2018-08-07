import React from 'react'
import { Box } from 'grid-styled'
import { Container, Layout } from '../src'
import * as Rebass from 'rebass'

const sidebar = (
  <pre>sidebar</pre>
)

export default ({ children, ...props }) =>
  <Container {...props}
    components={Rebass}
  >
    <Rebass.Provider>
      <Layout sidebar={sidebar}>
        {children}
      </Layout>
    </Rebass.Provider>
  </Container>

import React from 'react'
import { Box } from 'grid-styled'
import { Provider, Layout, SideNav } from '../src'
import * as Rebass from 'rebass'

const theme = {
}

export default ({ children, ...props }) => {
  // console.log(props)
  return (
    <Provider components={Rebass} theme={theme}>
      <Rebass.Provider>
        <Layout
          sidebar={(
            <SideNav
              {...props}
              order={[
                'index',
                'getting-started',
              ]}
            />
          )}>
          {children}
        </Layout>
      </Rebass.Provider>
    </Provider>
  )
}

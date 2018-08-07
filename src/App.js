import React from 'react'
import {
  BrowserRouter,
  StaticRouter,
  Switch,
  Route,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import theme from './themes/base'
import components from './components'
import { DocsProvider } from './context'
import Root from './Root'
import { modes } from './constants'

const isBrowser = typeof document !== undefined
const Router = isBrowser ? BrowserRouter : StaticRouter

export default class extends React.Component {
  static defaultProps = {
    routes: [],
    pathname: '/',
    Root
  }

  state = {
    mode: modes.normal
  }

  update = fn => this.setState(fn)

  render () {
    const {
      routes = [],
      pathname,
      basename,
      Root,
    } = this.props

    return (
      <Router
        basename={basename}
        location={pathname}
        context={{}}>
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>
            <Root
              {...this.props}
              {...this.state}
              update={this.update}>
              <DocsProvider
                {...this.props}
                {...this.state}
                update={this.update}>
                <React.Fragment>
                  <Switch>
                    {routes.map(({ Component, ...route }) => (
                      <Route
                        {...route}
                        render={router => (
                          <Component router={router} />
                        )}
                      />
                    ))}
                    <Route
                      render={() => (
                        <pre>404</pre>
                      )}
                    />
                  </Switch>
                </React.Fragment>
              </DocsProvider>
            </Root>
          </MDXProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

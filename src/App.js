import React from 'react'
import {
  Router as ReachRouter,
  ServerLocation,
  Route,
} from '@reach/router'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import theme from './themes/base'
import components from './components'
import { DocsProvider } from './context'
import Root from './Root'
import Isolate from './Isolate'
import Keyboard from './Keyboard'
import ScrollTop from './ScrollTop'
import { modes } from './constants'
import { toggleMode } from './updaters'

const isBrowser = typeof document !== 'undefined'
// const Router = isBrowser ? BrowserRouter : StaticRouter

const Router = ({
  basename,
  pathname,
  ...props
}) => {
  if (isBrowser) {
    return (
      <ReachRouter basepath={basename} {...props} />
    )
  }
  return (
    <ServerLocation url={pathname}>
      <ReachRouter basepath={basename} {...props} />
    </ServerLocation>
  )
}

const keys = {
  i: 73
}
const keyboardShortcuts = {
  [keys.i]: toggleMode('isolate')
}

export default class extends React.Component {
  static defaultProps = {
    routes: [],
    pathname: '/',
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
    } = this.props
    const { mode } = this.state
    const { App = Root } = routes

    return (
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>
            <React.Fragment>
              <App
                {...this.props}
                {...this.state}
                update={this.update}>
                <DocsProvider
                  {...this.props}
                  {...this.state}
                  update={this.update}>
                  <React.Fragment>
                    <Router pathname={pathname} basepath={basename}>
                      {routes.map(({ Component, ...route }) => (
                        <Route
                          {...route}
                          render={router => mode === modes.isolate ? (
                            <Isolate examples={route.code} />
                          ) : (
                            <Component router={router} />
                          )}
                        />
                      ))}
                      <Route
                        default
                        render={() => (
                          <pre>404</pre>
                        )}
                      />
                    </Router>
                  </React.Fragment>
                </DocsProvider>
              </App>
              <Keyboard
                update={this.update}
                handlers={keyboardShortcuts}
              />
              {false && <ScrollTop />}
            </React.Fragment>
          </MDXProvider>
        </ThemeProvider>
    )
  }
}

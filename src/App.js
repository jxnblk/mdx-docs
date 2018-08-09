import React from 'react'
import {
  BrowserRouter,
  StaticRouter,
  Switch,
  Route,
} from 'react-router-dom'
import Provider from './Provider'
import { RoutesProvider } from './route-context'
import Layout from './Layout'
import Isolate from './Isolate'
import Keyboard from './Keyboard'
import ScrollTop from './ScrollTop'
import { modes } from './constants'
import { toggleMode } from './updaters'

const isBrowser = typeof document !== 'undefined'
const Router = isBrowser ? BrowserRouter : StaticRouter

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
    const NotFound = routes.notFound
      ? routes.notFound.Component
      : () => <pre>404</pre>

    return (
      <Router
        basename={basename}
        location={pathname}
        context={{}}>
        <Provider {...routes.config}>
          <RoutesProvider {...this.props}>
            <Layout
              {...this.props}
              {...this.state}
              update={this.update}>
              <React.Fragment>
                <Switch>
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
                    render={router => (
                      <NotFound
                        {...this.props}
                        {...router}
                      />
                    )}
                  />
                </Switch>
              </React.Fragment>
            </Layout>
            <Keyboard
              update={this.update}
              handlers={keyboardShortcuts}
            />
            <ScrollTop />
          </RoutesProvider>
        </Provider>
      </Router>
    )
  }
}

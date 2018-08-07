import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'

const Context = React.createContext()

export const DocsProvider = withRouter(withMDXComponents(class extends React.Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
  }

  render () {
    const { children, ...props } = this.props

    const route = props.routes.find(route => route.path === props.location.pathname)

    const context = {
      ...props,
      route
    }

    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    )
  }
}))

export const withDocs = Component => props =>
  <Context.Consumer>
    {docs => (
      <Component
        {...props}
        {...docs}
      />
    )}
  </Context.Consumer>

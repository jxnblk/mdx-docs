import React from 'react'
import { withRouter } from 'react-router-dom'

export const Context = React.createContext()

export const RoutesProvider = withRouter(({
  routes = [],
  location = {},
  children
}) => {
  const route = routes.find(route => route.path === location.pathname)
  const context = {
    routes,
    route
  }
  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
})

export const withRoutes = Component => props =>
  <Context.Consumer
    children={routes => <Component {...props} {...routes} />}
  />

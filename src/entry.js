import React from 'react'
import {
  hydrate,
  render
} from 'react-dom'
import App from './App'
import getRoutes from './routes'

const div = document.getElementById('root')
const routes = getRoutes()

// or hydrate
render(
  <App
    routes={routes}
    App={routes.App}
  />,
  div
)

if (module.hot) module.hot.accept()

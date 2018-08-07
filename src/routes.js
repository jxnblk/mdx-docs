import React from 'react'
import path from 'path'

export const getRoutes = () => {
  const req = require.context(DIRNAME, true, /\.(js|md|mdx)$/)

  const keys = req.keys()
    .map(key => ({
      key,
      name: path.basename(key, path.extname(key)),
      dirname: path.dirname(key).replace(/^\./, ''),
      extname: path.extname(key),
    }))

  const routes = keys
    .filter(route => !/^_/.test(route.name))
    .map(route => {
      const exact = route.name === 'index'
      const pathname = route.dirname + '/' + (exact ? '' : route.name)
      const mod = req(route.key)
      const Component = mod.default

      return {
        ...route,
        exact,
        path: pathname,
        module: mod,
        Component
      }
    })

  const app = keys.find(key => key.name === '_app')
  routes.App = app ? req(app.key).default : undefined

  return routes
}

export default getRoutes

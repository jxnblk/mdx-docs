import React from 'react'
import path from 'path'
import titleize from 'titleize'

const unhyphenate = str => str.replace(/(\w)(-)(\w)/g, '$1 $3')

export const getRoutes = () => {
  const codeCtx = require.context('!!../lib/code-loader!' + DIRNAME, true, /\.mdx?$/)
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
      const title = titleize(unhyphenate(route.name))

      return {
        ...route,
        title,
        exact,
        path: pathname,
        module: mod,
        Component
      }
    })
    .filter(route => typeof route.Component === 'function')
    .map(route => {
      let code
      try {
        code = codeCtx(route.key)
      } catch (e) {}
      return {
        ...route,
        code
      }
    })

  const app = keys.find(key => key.name === '_app')
  routes.App = app ? req(app.key).default : undefined
  routes.notFound = routes.find(route => route.name === '404')

  return routes
}

export default getRoutes

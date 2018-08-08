const path = require('path')
const Koa = require('koa')
const getPort = require('get-port')
const webpack = require('webpack')
const koaWebpack = require('koa-webpack')
const koaStatic = require('koa-static')
const historyFallback = require('koa2-history-api-fallback')
const HTMLPlugin = require('mini-html-webpack-plugin')
const createConfig = require('./create-config')
const createTemplate = require('./template')

const devMiddleware = {
  publicPath: '/',
  clientLogLevel: 'error',
  stats: 'errors-only',
  logLevel: 'error',
}

const start = async (opts = {}) => {
  const app = new Koa()
  opts.hotPort = await getPort()
  const hotClient = {
    port: opts.hotPort,
    logLevel: 'error'
  }

  const config = createConfig(opts)
  const template = createTemplate(opts)

  config.plugins.push(
    new webpack.DefinePlugin({
      HOT_PORT: JSON.stringify(opts.hotPort),
      DEV: JSON.stringify(true)
    }),
    new HTMLPlugin({
      template,
      context: opts
    })
  )

  config.entry.push(
    path.join(__dirname, './error-overlay.js')
  )

  const middleware = await koaWebpack({
    config,
    devMiddleware,
    hotClient
  })
  const port = opts.port || await getPort()
  app.use(historyFallback())
  app.use(middleware)
  app.use(koaStatic(opts.dirname))

  const server = app.listen(port)
  return new Promise((resolve) => {
    middleware.devMiddleware.waitUntilValid(() => {
      resolve({ server, app, middleware, port })
    })
  })
}

module.exports = start

const path = require('path')
const Koa = require('koa')
const getPort = require('get-port')
const webpack = require('webpack')
const koaWebpack = require('koa-webpack')
const koaStatic = require('koa-static')
const historyFallback = require('koa2-history-api-fallback')
const createConfig = require('./create-config')

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
  config.plugins.push(
    new webpack.DefinePlugin({
      DEV: JSON.stringify(true)
    })
  )

  // config.entry.push(
  //   path.join(__dirname, './overlay.js'),
  // )

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

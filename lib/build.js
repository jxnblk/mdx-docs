const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('mini-html-webpack-plugin')
const rimraf = require('rimraf')
const createConfig = require('./create-config')
const renderHTML = require('./html')
const template = require('./template')

const remove = filename => {
  rimraf(filename, err => {
    if (err) console.log(err)
  })
}

const getApp = async (opts = {}) => {
  const config = createConfig(opts)
  config.output = {
    path: opts.tempDir,
    filename: '[name].js',
    libraryTarget: 'umd'
  }
  config.entry = {
    App: path.join(__dirname, '../src/App.js'),
    routes: path.join(__dirname, '../src/routes.js')
  }
  config.target = 'node'
  const compiler = webpack(config)
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        reject(err)
        return
      }
      const App = require(
        path.resolve(opts.tempDir, './App.js')
      ).default
      const { getRoutes } = require(
        path.resolve(opts.tempDir, './routes.js')
      )
      const routes = getRoutes()
      resolve({ App, routes })
    })
  })
}

module.exports = async (opts = {}) => {
  const config = createConfig(opts)
  config.mode = 'production'
  config.output = {
    path: opts.outDir,
    publicPath: (opts.basename || '') + '/'
  }
  opts.tempDir = path.join(opts.outDir, 'TEMP')
  if (!fs.existsSync(opts.outDir)) fs.mkdirSync(opts.outDir)
  if (!fs.existsSync(opts.tempDir)) fs.mkdirSync(opts.tempDir)

  const { App, routes } = await getApp(opts)
  const pages = routes.map(route => renderHTML(
    Object.assign({}, route, opts, {
      App,
      routes,
    })
  ))

  pages.forEach(page => {
    config.plugins.push(
      new HTMLPlugin({
        filename: page.path + '/index.html',
        context: Object.assign({}, opts, page),
        template
      })
    )
  })

  // todo 404

  const compiler = webpack(config)


  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      remove(opts.tempDir)
      if (err) {
        reject(err)
        return
      }
      resolve(stats)
    })
  })
}

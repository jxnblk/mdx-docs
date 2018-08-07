#!/usr/bin/env node
const path = require('path')
const meow = require('meow')
const open = require('react-dev-utils/openBrowser')
const clipboard = require('clipboardy')
const chalk = require('chalk')

const config = require('pkg-conf').sync('mdx-docs')

const log = (...args) => {
  console.log(
    chalk.magenta('[docs]'),
    ...args
  )
}

log.error = (...args) => {
  console.log(
    chalk.red('[err]'),
    ...args
  )
}

const cli = meow(`
  ${chalk.magenta('[docs]')}

  ${chalk.gray('Usage:')}

    ${chalk.magenta('$ mdx-docs docs')}

    ${chalk.magenta('$ mdx-docs build docs')}

  ${chalk.gray('Options:')}

    ${chalk.magenta('-p --port')}   Development server port

    ${chalk.magenta('--no-open')}   Prevent from opening in default browser


`, {
  flags: {
    port: {
      type: 'string',
      default: '8080',
      alias: 'p'
    },
    open: {
      type: 'boolean',
      alias: 'o',
      default: true
    },
    outDir: {
      type: 'string',
      alias: 'd',
      default: 'dist'
    },
    help: {
      type: 'boolean',
      alias: 'h'
    },
    version: {
      type: 'boolean',
      alias: 'v'
    }
  }
})

const [ cmd, dir ] = cli.input
const dirname = dir || cmd

if (!dirname) {
  cli.showHelp(0)
}

const opts = Object.assign({
  dirname: path.resolve(dirname)
}, config, cli.flags)

opts.outDir = path.resolve(opts.outDir)

switch (cmd) {
  case 'build':
    const build = require('./lib/build')
    log('exporting')
    build(opts)
      .then(stats => {
        log('exported', chalk.gray(opts.outDir))
      })
      .catch(err => {
        log.error(err)
        process.exit(1)
      })
    break
  case 'dev':
  default:
    const dev = require('./lib/dev')
    log('starting dev server')
    dev(opts)
      .then(({ port, app, middleware }) => {
        const url = `http://localhost:${port}`
        clipboard.write(url)
        console.log()
        log('server listening on', chalk.magenta(url))
        if (opts.open) open(url)
      })
      .catch(err => {
        log.error(err)
        process.exit(1)
      })
}

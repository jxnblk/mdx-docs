#!/usr/bin/env node
const meow = require('meow')
const chalk = require('chalk')
const config = require('pkg-conf').sync('mdx-docs')

const cli = meow(`
  ${chalk.gray('$')} ${chalk.magenta('npm init docs')}
`, {
  flags: {
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

cli.showHelp(0)



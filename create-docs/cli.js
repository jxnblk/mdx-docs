#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const meow = require('meow')
const prompts = require('prompts/dist')
const chalk = require('chalk')
const initit = require('initit')

const logo = chalk.cyan('[docs]')
const log = (...args) => {
  console.log(logo, ...args)
}
log.error = (...args) => {
  console.log(chalk.red('[ERROR]'), ...args)
}

const templates = [
  { name: 'Next.js', path: 'jxnblk/mdx-docs/templates/next' },
  // { name: 'Compositor x0', path: 'jxnblk/mdx-docs/templates/x0' },
]

const cli = meow(`
  Usage

    $ npm init docs

    $ npx create-docs

  Options

    --name  Directory name for docs

    -y      Create docs without confirmation step

`, {
  booleanDefault: undefined,
  flags: {
    help: {
      type: 'boolean',
      alias: 'h'
    },
    version: {
      type: 'boolean',
      alias: 'v'
    },
    name: {
      type: 'string'
    },
    confirm: {
      type: 'boolean',
      alias: 'y'
    }
  }
})

const form = [
  /*
  {
    type: 'select',
    name: 'template',
    message: 'Choose a base template',
    choices: templates.map(({ name }, i) => ({ title: name, value: i }))
  },
  */
  {
    type: 'text',
    name: 'name',
    message: 'Choose a name for the docs folder',
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: (prev, values) => `Create docs in ${values.name}?`,
    initial: true
  }
]

const run = async opts => {
  prompts.inject(opts)
  const response = await prompts(form)

  if (!response.confirm) {
    log('aborted')
    process.exit(0)
  }
  const { name } = response
  const template = templates[response.template] || templates[0]

  log('creating docs...')

  if (!name) {
    log.error('name is required')
    // todo: prompt again
    process.exit(1)
  }

  if (!template) {
    // this should never happen
    log.error('template not found')
    process.exit(1)
  }

  // todo: ensure directory doesn't exist

  initit({ name, template: template.path })
    .then(res => {
      log('created docs')
      process.exit(0)
    })
    .catch(err => {
      log.error('failed to create docs')
      log.error(err)
      process.exit(1)
    })
}

run(cli.flags)

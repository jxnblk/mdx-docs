const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const mdPlugins = [
  require('remark-images'),
  require('remark-unwrap-images'),
  require('remark-emoji'),
  require('remark-slug'),
  require('remark-autolink-headings'),
]

const babel = {
  presets: [
    'babel-preset-env',
    'babel-preset-stage-0',
    'babel-preset-react',
  ].map(require.resolve)
}

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: babel
  },
  {
    test: /\.js$/,
    exclude: path.resolve(__dirname, '../node_modules'),
    include: [
      path.resolve(__dirname, '..'),
      path.resolve(__dirname, '../src'),
    ],
    loader: require.resolve('babel-loader'),
    options: babel
  },
  {
    test: /\.mdx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: babel
      },
      {
        loader: require.resolve('@mdx-js/loader'),
        options: {
          mdPlugins
        }
      }
    ]
  }
]


const baseConfig = {
  stats: 'errors-only',
  mode: 'development',
  module: {
    rules
  },
  resolve: {
    modules: [
      path.relative(process.cwd(), path.join(__dirname, '../node_modules')),
      'node_modules'
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      width: '24',
      complete: '█',
      incomplete: chalk.gray('░'),
      format: [
        chalk.magenta('[docs] :bar'),
        chalk.magenta(':percent'),
        chalk.gray(':elapseds :msg'),
      ].join(' '),
      summary: false,
      customSummary: () => {},
    })
  ]
}

const createConfig = (opts = {}) => {
  const base = Object.assign({}, baseConfig)
  base.context = opts.dirname

  base.resolve.modules.push(
    opts.dirname,
    path.join(opts.dirname, 'node_modules')
  )

  base.entry = [
    path.join(__dirname, '../src/entry.js')
  ]

  const defs = Object.assign({}, {
    OPTIONS: JSON.stringify(opts),
    DIRNAME: JSON.stringify(opts.dirname),
    HOT_PORT: JSON.stringify(opts.hotPort)
  })

  base.plugins.push(
    new webpack.DefinePlugin(defs),
  )

  const config = typeof opts.config === 'function'
    ? opts.config(base)
    : base

  /*
  if (config.resolve.alias) {
    const hotAlias = config.resolve.alias['webpack-hot-client/client']
    if (!fs.existsSync(hotAlias)) {
      const hotPath = path.dirname(require.resolve('webpack-hot-client/client'))
      config.resolve.alias['webpack-hot-client/client'] = hotPath
    }
  }
  */

  return config
}

module.exports = createConfig

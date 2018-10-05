const path = require('path')
const mdPlugins = [
  require('remark-autolink-headings'),
  require('remark-emoji'),
  require('remark-images'),
  require('remark-slug'),
  require('remark-unwrap-images'),
]

const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? 'https://jxnblk.com/mdx-docs/' : ''

module.exports = {
  pageExtensions: [
    'js', 'md', 'mdx'
  ],
  assetPrefix,
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.join(__dirname, '../packages'),
      use: [defaultLoaders.babel]
    })

    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins
          }
        }
      ]
    })

    config.resolve.alias['styled-components'] = path.join(__dirname, './node_modules/styled-components')

    config.resolve.alias['mdx-docs'] = path.join(__dirname, '../packages/mdx-docs/src')

    return config
  },
}

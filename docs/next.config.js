const path = require('path')
const mdPlugins = [
  require('remark-autolink-headings'),
  require('remark-emoji'),
  require('remark-images'),
  require('remark-slug'),
  require('remark-unwrap-images'),
]

module.exports = {
  pageExtensions: [
    'js', 'md', 'mdx'
  ],
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
    config.resolve.alias['@mdx-js/tag'] = path.join(__dirname, './node_modules/@mdx-js/tag')

    config.resolve.alias['mdx-docs'] = path.join(__dirname, '../packages/mdx-docs/src')
    config.resolve.alias['mdx-style'] = path.join(__dirname, '../packages/mdx-style/src')
    config.resolve.alias['mdx-live'] = path.join(__dirname, '../packages/mdx-live/src')

    return config
  },
}

const defaultMdPlugins = [
  require('remark-autolink-headings'),
  require('remark-emoji'),
  require('remark-images'),
  require('remark-slug'),
  require('remark-unwrap-images'),
]

const defaultNextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
}

module.exports = ({
  mdPlugins = [],
  extension = /\.mdx?$/,
  ...pluginOptions
} = {}) => (nextConfig = {}) => {
  const allMdPlugins = [...mdPlugins, ...defaultMdPlugins]

  const options = Object.assign({}, pluginOptions, {
    mdPlugins: allMdPlugins
  })

  return Object.assign({}, defaultNextConfig, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: extension,
        use: [
          options.defaultLoaders.babel,
          {
            loader: '@mdx-js/loader',
            options: Object.assign({}, pluginOptions, {
              mdPlugins: allMdPlugins
            })
          }
        ]
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}

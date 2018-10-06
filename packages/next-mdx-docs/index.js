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

module.exports = (providedOptions = {}) => (nextConfig = {}) => {
  const allMdPlugins = defaultMdPlugins.concat(providedOptions.mdPlugins || [])

  return Object.assign({}, defaultNextConfig, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: providedOptions.extension || /\.mdx?$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: '@mdx-js/loader',
            options: Object.assign({}, providedOptions, {
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

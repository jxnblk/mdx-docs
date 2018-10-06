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

    return config
  },
}

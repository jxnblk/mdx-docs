const remark = {
  images: require('remark-images'),
  emoji: require('remark-emoji'),
  slug: require('remark-slug'),
  autolinkHeadings: require('remark-autolink-headings'),
}

module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [
              remark.images,
              remark.emoji,
              remark.slug,
              remark.autolinkHeadings
            ]
          }
        },
        'mdx-fm-loader'
      ]
    })

    return config
  }
}

const withMdxDocs = require('next-mdx-docs')()
const isProd = process.env.NODE_ENV === 'production'

module.exports = withMdxDocs({
  assetPrefix: isProd ? 'https://jxnblk.com/mdx-docs/' : ''
})

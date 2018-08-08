const HTMLPlugin = require('mini-html-webpack-plugin')
const { minify } = require('html-minifier')

const defaultTemplate = ({
  title = 'mdx-docs',
  html = '',
  css = '',
  scripts,
  js,
  publicPath
}) => `<!DOCTYPE html>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<style>*{box-sizing:border-box}body{font-family:system-ui,sans-serif;margin:0}</style>${css}
<title>${title}</title>
<div id=root>${html}</div>
${scripts}
`

module.exports = (opts) => {
  const template = opts.template || defaultTemplate
  return context => {
    const scripts = HTMLPlugin.generateJSReferences(context.js, context.publicPath)
    return minify(
      template(Object.assign({}, context, { scripts })),
      {
        collapseWhitespace: true
      }
    )
  }
}

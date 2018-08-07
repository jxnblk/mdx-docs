const HTMLPlugin = require('mini-html-webpack-plugin')
module.exports = ({
  title = 'mdx-docs',
  html = '',
  css = '',
  js,
  publicPath
}) => `<!DOCTYPE html>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<style>*{box-sizing:border-box}body{font-family:system-ui,sans-serif;margin:0}</style>${css}
<title>${title}</title>
<div id=root>${html}</div>
${HTMLPlugin.generateJSReferences(js, publicPath)}
`

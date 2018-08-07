const React = require('react')
const { renderToString } = require('react-dom/server')
const { ServerStyleSheet } = require('styled-components')

// renderHTML
module.exports = ({
  App,
  routes,
  path,
  basename
}) => {
  const sheet = new ServerStyleSheet()
  const html = renderToString(
    sheet.collectStyles(
      React.createElement(App, {
        routes,
        pathname: path,
        basename
      })
    )
  )
  const css = sheet.getStyleTags()
  return { html, css, path }
}

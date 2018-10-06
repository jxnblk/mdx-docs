import Document, { Head, Main, NextScript } from 'next/document'

const BaseCSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

BaseCSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='generator' content='mdx-docs' />
          <BaseCSS />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

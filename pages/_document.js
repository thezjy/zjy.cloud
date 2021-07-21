import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Junyu Zhan's homepage" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={true}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bitter&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-serif">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

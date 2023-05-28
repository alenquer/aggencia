import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.min.css" />
      </Head>
      <body>
        <script src="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.js" async />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

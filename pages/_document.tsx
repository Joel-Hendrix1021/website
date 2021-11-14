import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;700;800;900&display=swap"
          />
          <link rel="icon" href="/favicon.icon" />
          <link rel="icon" href="/favicon-32.png" sizes="32x32" />
          <link rel="icon" href="/favicon-48.png" sizes="48x48" />
          <link rel="icon" href="/favicon-57.png" sizes="57x57" />
          <link rel="icon" href="/favicon-76.png" sizes="76x76" />
          <link rel="icon" href="/favicon-96.png" sizes="96x96" />
          <link rel="icon" href="/favicon-128.png" sizes="128x128" />
          <link rel="icon" href="/favicon-192.png" sizes="192x192" />
          <link rel="icon" href="/favicon-228.png" sizes="228x228" />

          <link rel="shortcut icon" sizes="196x196" href="/favicon-196.png" />

          <link
            rel="apple-touch-icon"
            href="/favicon-120.png"
            sizes="120x120"
          />
          <link
            rel="apple-touch-icon"
            href="/favicon-152.png"
            sizes="152x152"
          />
          <link
            rel="apple-touch-icon"
            href="/favicon-180.png"
            sizes="180x180"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

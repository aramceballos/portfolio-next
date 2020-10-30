import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />

        <meta
          name='description'
          content='This is the portfolio of a Full-Stack JavaScript Developer which you can find their projects, skills and info about him'
        />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Aram Ceballos' />
        <meta name='copyright' content='Aram Ceballos' />
        <meta name='application-name' content='Aram Ceballos' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Aram Ceballos' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#1d1d1d' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <meta name='theme-color' content='#1d1d1d' />

        <link rel='apple-touch-icon' sizes='180x180' href='/icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'></link>

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://aramceballos.com' />
        <meta name='twitter:title' content='Aram Ceballos' />
        <meta
          name='twitter:description'
          content='This is the portfolio of a Full-Stack JavaScript Developer which you can find their projects, skills and info about him'
        />
        <meta
          name='twitter:image'
          content='https://aramceballos.com/static/icons/android-chrome-192x192.png'
        />
        <meta name='twitter:creator' content='@aramgonzalez12' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Aram Ceballos' />
        <meta
          property='og:description'
          content='This is the portfolio of a Full-Stack JavaScript Developer which you can find their projects, skills and info about him'
        />
        <meta property='og:site_name' content='Aram Ceballos' />
        <meta property='og:url' content='https://aramceballos.com' />
        <meta
          property='og:image'
          content='https://aramceballos.com/static/icons/apple-touch-icon.png'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
          rel='stylesheet'
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

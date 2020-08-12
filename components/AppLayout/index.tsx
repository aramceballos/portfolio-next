import Head from 'next/head';
import { fonts } from '../../styles/theme';
import NavBar from '../NavBar';

function AppLayout({
  title,
  children,
}: {
  title?: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | Aram Ceballos`
            : 'Aram Ceballos - Full Stack JavaScript Developer'}
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <NavBar />
        {children}
      </main>

      <style jsx>{`
        main {
          height: 100vh;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          font-family: ${fonts.base};
        }

        a {
          text-decoration: none;
          display: inline;
          color: black;
        }
      `}</style>
    </>
  );
}

export default AppLayout;

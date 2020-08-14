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
        <meta
          name='description'
          content='This is the portfolio of a Full-Stack JavaScript Developer which you can find their projects, certificates and info about him'
        />
        <meta
          name='keywords'
          content='HTML, CSS, JS, JAVASCRIPT, FULL-STACK, FRONTEND, BACKEND, NODE.JS, REACT, REDUX, JEST, WEB, WEB DEVELOPER, REACT.JS, GRAPHQL'
        />
        <meta name='author' content='Aram Ceballos' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'></link>
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

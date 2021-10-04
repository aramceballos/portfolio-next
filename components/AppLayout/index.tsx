import Head from "next/head";

type AppLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const AppLayout = ({ title, children }: AppLayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | Aram Ceballos`
            : "Aram Ceballos - Full Stack JavaScript Developer"}
        </title>
      </Head>
      {children}

      <style jsx global>{`
        * {
          outline: none;
        }
        *,
        :after,
        :before {
          box-sizing: border-box;
        }
        html {
          font-size: 62.5%;
        }
        body {
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          background-color: #fff;
          color: #212529;
          font-family: Montserrat, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          margin: 0;
          text-align: center;
        }

        a {
          text-decoration: none;
          display: inline;
          color: black;
        }

        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }
      `}</style>
    </>
  );
};

export default AppLayout;

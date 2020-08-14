import AppLayout from '../components/AppLayout';
import { breakpoints } from '../styles/theme';

function Home(): JSX.Element {
  return (
    <>
      <AppLayout>
        <main>
          <p>
            Hi my name is Aram Ceballos and i am a JavaScript Full Stack
            Developer, in this page you can find more information about me, my
            skills and projects i have worked on
          </p>
        </main>
      </AppLayout>
      <style jsx>{`
        main {
          height: 100%;
          background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
            url('/Cover.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 50px 0;
        }

        p {
          font-size: 23px;
          letter-spacing: 7px;
          color: black;
          text-align: center;
          color: white;
          margin: 20px 10px;
        }

        @media screen and (min-width: ${breakpoints.mobile}) {
          main {
            padding: 60px 0;
          }

          p {
            font-size: 30px;
          }
        }
      `}</style>
    </>
  );
}

export default Home;

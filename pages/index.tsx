import AppLayout from '../components/AppLayout';
import { breakpoints } from '../styles/theme';

function Home(): JSX.Element {
  return (
    <>
      <AppLayout>
        <main>
          <section>
            <p>
              Hi my name is Aram Ceballos and i am a JavaScript Full Stack
              Developer, in this page you can find more information about me, my
              skills and projects i have worked on
            </p>
          </section>
        </main>
      </AppLayout>
      <style jsx>{`
        main {
          display: grid;
          grid-template-columns: 1fr 4fr 1fr;
          height: 100%;
          background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
            url('/Cover.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        section {
          display: grid;
          grid-column: 2;
          justify-items: center;
          height: 350px;
          margin-top: 80px;
        }

        p {
          font-size: 30px;
          letter-spacing: 7px;
          color: black;
          text-align: center;
          color: white;
        }

        @media screen and (max-width: ${breakpoints.mobile}) {
          section {
            grid-column: 4;
            margin: 80px 20px;
          }

          p {
            font-size: 23px;
          }
        }
      `}</style>
    </>
  );
}

export default Home;

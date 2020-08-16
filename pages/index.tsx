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
              Developer. I have been a dedicated and determined who sets goals
              for himself. Having learned most of my skills through
              self-teaching by sources like courses, books, official
              documentations and other developers.
              <br />
              <br />
              Here you are gonna find projects i have worked on.
            </p>
          </section>
        </main>
      </AppLayout>
      <style jsx>{`
        main {
          height: 100%;
          background: url('/Cover.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        section {
          backdrop-filter: blur(10px);
          width: 90%;
          box-shadow: 0px 0px 20px 4px #000000;
          background-color: #00000099;
        }

        p {
          font-size: 21px;
          letter-spacing: 7px;
          color: black;
          text-align: center;
          color: white;
          margin: 20px 10px;
          font-weight: 200;
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

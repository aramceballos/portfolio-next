import AppLayout from '../components/AppLayout';
import { breakpoints, colors } from '../styles/theme';

const Home = () => {
  return (
    <>
      <AppLayout>
        <main>
          <section className='presentation'>
            <h1 className='name'>I'm Aram Ceballos.</h1>
            <p className='me'>
              I'm a FullStack JavaScript/TypeScript Developer working mainly
              with React.js and React Native
            </p>
          </section>
          <section className='info'>
            <section className='info-section'>
              <h3 className='subsection-title'>About Me</h3>
              <p className='section-detail'>
                My name is Aram and i am a FullStack and Mobile developer,
                working with JavaScript, TypeScript and Python
              </p>
            </section>
            <section className='info-section'>
              <h3 className='subsection-title'>Contact Details</h3>
              <p className='section-detail'>Name: Aram Ceballos</p>
              <p className='section-detail'>
                E-mail: aramgonzalez12@hotmail.com
              </p>
              <a
                className='link'
                href='https://www.linkedin.com/in/aram-ceballos-2258b717b/'
                target='_blank'
                title='LinkedIn'
                rel='noopener noreferrer'>
                LinkedIn
              </a>
              <a
                className='link'
                href='https://www.github.com/armc7'
                target='_blank'
                title='GitHub'
                rel='noopener noreferrer'>
                GitHub
              </a>
            </section>
          </section>
        </main>
      </AppLayout>
      <style jsx>{`
        main {
          height: 100%;
        }

        .presentation {
          height: 100vh;
          background: url('/background.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .name {
          color: white;
          font-size: 45px;
          font-weight: 400;
          font-family: 'Open Sans', sans-serif;
          text-align: center;
        }

        .me {
          font-family: 'Open Sans', sans-serif;
          font-size: 20px;
          letter-spacing: 4px;
          color: black;
          text-align: center;
          color: white;
          margin: 0px 10px;
          font-weight: 200;
        }

        .info {
          background-color: ${colors.darkGray};
          padding: 90px 0;
        }

        .info-section {
          padding: 20px 30px;
        }

        .subsection-title {
          margin: 0;
          color: white;
          font-size: 24px;
        }

        .section-detail {
          color: #aaa;
          font-weight: 300;
        }

        .link {
          font-weight: 300;
          color: #aaa;
          text-decoration: underline;
          margin-right: 40px;
        }

        @media screen and (min-width: ${breakpoints.mobile}) {
          .name {
            font-size: 80px;
          }

          .me {
            font-size: 30px;
            margin: 0px 10px;
            width: 70%;
          }
        }
      `}</style>
    </>
  );
};

export default Home;

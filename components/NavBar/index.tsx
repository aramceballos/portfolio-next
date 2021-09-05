import Link from 'next/link';

import GitHubIcon from '../GitHubIcon';

import { colors, breakpoints } from '../../styles/theme';

const NavBar = (): JSX.Element => {
  return (
    <>
      <nav className='navbar'>
        <a
          href='https://www.github.com/aramceballos'
          target='_blank'
          rel='noopener noreferrer'
          title='GitHub'
          className='github1'>
          <GitHubIcon />
        </a>

        <div className='logo-container'>
          <h3>
            <Link href='/'>
              <a className='logo' title='Home'>
                ARAM CEBALLOS
              </a>
            </Link>
          </h3>
        </div>

        <a href='/CV.pdf' download className='download-cv'>
          Download CV
        </a>

        <a
          href='https://www.github.com/aramceballos'
          target='_blank'
          rel='noopener noreferrer'
          className='github2'>
          <GitHubIcon />
        </a>
      </nav>

      <style jsx>{`
        h3 {
          margin: 0;
        }

        .navbar {
          width: 100vw;
          height: 50px;
          backdrop-filter: blur(21px);
          background-color: ${colors.transparentGray};
          box-shadow: inset 0px 0px 18px -10px ${colors.black},
            inset 0px 0px 0px 0px ${colors.black};
          display: flex;
          align-items: center;
          position: fixed;
          justify-content: space-around;
          transition: box-shadow 0.5s ease-in-out;
          z-index: 9999;
          top: 0;
        }

        .logo-container {
          z-index: 9999;
        }

        .logo {
          color: ${colors.white};
          font-size: 22px;
          font-weight: 100;
          font-family: 'Poppins';
          letter-spacing: 3px;
        }

        .github1 {
          width: 69px;
          display: flex;
          justify-content: center;
        }

        .github2 {
          display: none;
        }

        .download-cv {
          font-weight: 100;
          color: #fff;
          font-size: 12px;
          width: 69px;
          text-align: center;
        }

        @media screen and (min-width: ${breakpoints.laptop}) {
          .navbar {
            height: 60px;
            transition: initial;
            box-shadow: none;
          }

          .logo {
            font-size: 28px;
            letter-spacing: 7px;
          }

          .github1 {
            display: none;
          }

          .github2 {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;

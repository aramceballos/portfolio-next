import { useRef, useState } from 'react';
import Link from 'next/link';

import GitHubIcon from '../GitHubIcon';

import { colors, breakpoints } from '../../styles/theme';

const NavBar = (): JSX.Element => {
  const [active, setActive] = useState(false);

  const navbar: React.Ref<any> = useRef(null);
  const ref: React.Ref<any> = useRef(null);
  const projects: React.Ref<any> = useRef(null);
  const certificates: React.Ref<any> = useRef(null);
  const resume: React.Ref<any> = useRef(null);
  const wrapperLine1: React.Ref<any> = useRef(null);
  const wrapperLine2: React.Ref<any> = useRef(null);
  const line1: React.Ref<any> = useRef(null);
  const line2: React.Ref<any> = useRef(null);

  const timeForWrapper = active ? 200 : 0;
  const timeForLine = active ? 0 : 200;

  const handleClick = () => {
    if (window.screen.width < 500) {
      setActive(!active);

      navbar.current.classList.toggle('navbar-active');
      ref.current.classList.toggle('nav-active');

      projects.current.classList.toggle('items-active');
      certificates.current.classList.toggle('items-active');
      resume.current.classList.toggle('items-active');

      setTimeout(() => {
        wrapperLine1.current.classList.toggle('active');
        wrapperLine2.current.classList.toggle('active');
      }, timeForWrapper);

      setTimeout(() => {
        line1.current.classList.toggle('active');
        line2.current.classList.toggle('active');
      }, timeForLine);
    }
  };

  return (
    <>
      <nav className='navbar' ref={navbar}>
        <a
          href='https://www.github.com/armc7'
          target='_blank'
          rel='noopener noreferrer'
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

        <ul className='nav-links' ref={ref}>
          <li className='item' ref={projects}>
            <Link href='/projects'>
              <a title='Projects Page' onClick={handleClick}>
                PROJECTS
              </a>
            </Link>
          </li>
          <li className='item' ref={certificates}>
            <Link href='/certificates'>
              <a title='Certificates Page' onClick={handleClick}>
                CERTIFICATES
              </a>
            </Link>
          </li>
          <li className='item' ref={resume}>
            <Link href='/resume'>
              <a title='Resume Page' onClick={handleClick}>
                RESUME
              </a>
            </Link>
          </li>
        </ul>

        <div className='burger' onClick={handleClick}>
          <div className='wrapper-line1' ref={wrapperLine1}>
            <div className='line1' ref={line1}></div>
          </div>

          <div className='wrapper-line2' ref={wrapperLine2}>
            <div className='line2' ref={line2}></div>
          </div>
        </div>

        <a
          href='https://www.github.com/armc7'
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
          backdrop-filter: blur(10px);
          background-color: #1d1d1fcf;
          display: flex;
          align-items: center;
          position: fixed;
          justify-content: space-around;
          transition: background-color 0.5s ease;
          z-index: 9999;
          top: 0;
        }

        .navbar-active {
          background-color: ${colors.black};
        }

        .logo-container {
          z-index: 9999;
        }

        .logo {
          color: ${colors.white};
          font-size: 24px;
          font-weight: 100;
          font-family: 'Poppins';
          letter-spacing: 4px;
        }

        .nav-links {
          list-style: none;
          display: flex;
          justify-content: flex-start;
          width: 100%;
          position: absolute;
          height: 0;
          top: 50px;
          background-color: ${colors.black};
          margin: 0;
          flex-direction: column;
          align-items: center;
          padding: 0;
          transition: height 0.5s ease;
        }

        .item {
          width: 80%;
          justify-content: center;
          display: flex;
          border-top: 1px solid gray;
          padding: 20px;

          transform: scaleY(0);
          transition: transform 0.4s ease;
        }

        .nav-active {
          height: calc(100vh - 50px);
        }

        .items-active {
          transform: scaleY(1);
        }

        .nav-links a {
          color: ${colors.white};
          letter-spacing: 5px;
          font-weight: 100;
          font-size: 15px;
        }

        .burger {
          display: block;
          cursor: pointer;
        }

        .burger > div > div {
          width: 25px;
          height: 1px;
          background-color: ${colors.white};
          margin: 8px;
        }

        .wrapper-line1 {
          transition: 0.2s ease;
        }
        .wrapper-line2 {
          transition: 0.2s ease;
        }

        .line1 {
          transition: 0.2s ease;
        }
        .line2 {
          transition: 0.2s ease;
        }

        .wrapper-line1.active {
          transform: translateY(5px);
        }
        .wrapper-line2.active {
          transform: translateY(-4px);
        }

        .line1.active {
          transform: rotate(-45deg);
        }
        .line2.active {
          transform: rotate(45deg);
        }

        .github2 {
          display: none;
        }

        @media screen and (min-width: ${breakpoints.laptop}) {
          .navbar {
            height: 60px;
            transition: initial;
          }

          .logo {
            font-size: 28px;
            letter-spacing: 7px;
          }

          .burger {
            display: none;
          }

          .nav-links {
            justify-content: space-between;
            width: 45%;
            position: initial;
            right: initial;
            height: initial;
            flex-direction: initial;
            transform: initial;
            transition: initial;
            background-color: initial;
          }

          .item {
            transform: initial;
            transition: initial;
            border: initial;
          }

          .github1 {
            display: none;
          }

          .github2 {
            display: block;
          }
        }

        @media screen and (min-width: ${breakpoints.desktop}) {
          .nav-links {
            width: 40%;
            justify-content: space-around;
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;

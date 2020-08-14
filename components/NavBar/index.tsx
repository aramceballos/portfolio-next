import { useRef, useState } from 'react';
import Link from 'next/link';

import { colors, breakpoints } from '../../styles/theme';

function NavBar(): JSX.Element {
  const [active, setActive] = useState(false);

  const ref = useRef(null);
  const projects = useRef(null);
  const certificates = useRef(null);
  const curriculum = useRef(null);
  const wrapperLine1 = useRef(null);
  const wrapperLine2 = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);

  const timeForWrapper = active ? 300 : 0;
  const timeForLine = active ? 0 : 300;

  const handleClick = () => {
    setActive(!active);

    ref.current.classList.toggle('nav-active');

    projects.current.classList.toggle('items-active');
    certificates.current.classList.toggle('items-active');
    curriculum.current.classList.toggle('items-active');

    setTimeout(() => {
      wrapperLine1.current.classList.toggle('active');
      wrapperLine2.current.classList.toggle('active');
    }, timeForWrapper);

    setTimeout(() => {
      line1.current.classList.toggle('active');
      line2.current.classList.toggle('active');
    }, timeForLine);
  };

  return (
    <>
      <nav className='navbar'>
        <div>
          <h3>
            <Link href='/'>
              <a className='logo' title='Home'>
                ARAM CEBALLOS
              </a>
            </Link>
          </h3>
        </div>

        <ul className='nav-links' ref={ref}>
          <li ref={projects}>
            <Link href='/projects'>
              <a title='Projects Page'>PROJECTS</a>
            </Link>
          </li>
          <li ref={certificates}>
            <Link href='/certificates'>
              <a title='Certificates Page'>CERTIFICATES</a>
            </Link>
          </li>
          <li ref={curriculum}>
            <Link href='/curriculum'>
              <a title='Curriculum Page'>CURRICULUM</a>
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
      </nav>

      <style jsx>{`
        h3 {
          margin: 0;
        }

        .navbar {
          width: 100vw;
          height: 50px;
          background-color: ${colors.black};
          display: flex;
          align-items: center;
          position: fixed;
          justify-content: space-around;
        }

        .logo {
          color: ${colors.white};
          font-size: 24px;
          font-weight: 100;
          font-family: 'Poppins';
          letter-spacing: 5px;
        }

        .nav-links {
          list-style: none;
          display: flex;
          justify-content: space-around;
          width: 50%;
          position: absolute;
          right: 0px;
          height: calc(100vh - 50px);
          top: 50px;
          background-color: ${colors.black};
          margin: 0;
          flex-direction: column;
          align-items: center;
          padding: 0;
          transform: translateX(100%);
          transition: transform 0.5s ease-in;
        }

        .nav-links li {
          opacity: 0;
          transition: 0.5s ease;
        }

        .nav-active {
          transform: translateX(0);
        }

        .items-active {
          animation: navLinkFade 0.5s ease forwards 0.3s;
        }

        @keyframes navLinkFade {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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
          position: fixed;
          right: 12px;
        }

        .burger > div > div {
          width: 25px;
          height: 1px;
          background-color: ${colors.white};
          margin: 8px;
        }

        .wrapper-line1 {
          transition: 0.3s ease;
        }
        .wrapper-line2 {
          transition: 0.3s ease;
        }

        .line1 {
          transition: 0.3s ease;
        }
        .line2 {
          transition: 0.3s ease;
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

        @media screen and (min-width: ${breakpoints.tablet}) {
          .navbar {
            height: 60px;
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
            width: 57%;
            position: initial;
            right: initial;
            height: initial;
            flex-direction: initial;
            transform: initial;
            transition: initial;
          }

          .nav-links li {
            opacity: initial;
            transition: initial;
          }
        }

        @media screen and (min-width: ${breakpoints.laptop}) {
          .nav-links {
            width: 45%;
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
}

export default NavBar;

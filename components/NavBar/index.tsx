import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import GitHubIcon from '../GitHubIcon';

import { colors, breakpoints } from '../../styles/theme';

const NavBar = (): JSX.Element => {
  const [active, setActive] = useState(false);

  const router = useRouter();

  // Get references of elements
  const navbar: React.Ref<any> = useRef(null);
  const ref: React.Ref<any> = useRef(null);
  const projects: React.Ref<any> = useRef(null);
  const skills: React.Ref<any> = useRef(null);
  const curriculum: React.Ref<any> = useRef(null);
  const wrapperLine1: React.Ref<any> = useRef(null);
  const wrapperLine2: React.Ref<any> = useRef(null);
  const line1: React.Ref<any> = useRef(null);
  const line2: React.Ref<any> = useRef(null);
  const border1: React.Ref<any> = useRef(null);
  const border2: React.Ref<any> = useRef(null);
  const border3: React.Ref<any> = useRef(null);

  // Timings for animations
  const timeForNavBar = active ? 400 : 0;
  const timeForLinksWrapper = 200;
  const timeForLinks = active ? 500 : 0;
  const timeForLink1 = active ? 450 : 200;
  const timeForLink2 = active ? 350 : 300;
  const timeForLink3 = active ? 250 : 400;
  const timeForVerticalMove = active ? 200 : 0;
  const timeForRotate = active ? 0 : 200;

  useEffect(() => {
    switch (router.pathname) {
      case '/projects':
        border1.current.classList.add('border-line-active');
        border2.current.classList.remove('border-line-active');
        border3.current.classList.remove('border-line-active');
        break;

      case '/skills':
        border2.current.classList.add('border-line-active');
        border1.current.classList.remove('border-line-active');
        border3.current.classList.remove('border-line-active');
        break;

      case '/curriculum':
        border3.current.classList.add('border-line-active');
        border1.current.classList.remove('border-line-active');
        border2.current.classList.remove('border-line-active');
        break;
      default:
        border1.current.classList.remove('border-line-active');
        border2.current.classList.remove('border-line-active');
        border3.current.classList.remove('border-line-active');
        break;
    }
  }, [router.pathname]);

  const handleClick = () => {
    if (window.screen.width < 1024) {
      setActive(!active);

      setTimeout(() => {
        navbar.current.classList.toggle('navbar-active');
      }, timeForNavBar);

      setTimeout(() => {
        ref.current.classList.toggle('nav-active');
      }, timeForLinksWrapper);

      setTimeout(() => {
        projects.current.style.display = active ? 'none' : 'flex';
        skills.current.style.display = active ? 'none' : 'flex';
        curriculum.current.style.display = active ? 'none' : 'flex';
      }, timeForLinks);

      setTimeout(() => {
        projects.current.classList.toggle('items-active');
      }, timeForLink1);
      setTimeout(() => {
        skills.current.classList.toggle('items-active');
      }, timeForLink2);
      setTimeout(() => {
        curriculum.current.classList.toggle('items-active');
      }, timeForLink3);

      setTimeout(() => {
        wrapperLine1.current.classList.toggle('active');
        wrapperLine2.current.classList.toggle('active');
      }, timeForVerticalMove);

      setTimeout(() => {
        line1.current.classList.toggle('active');
        line2.current.classList.toggle('active');
      }, timeForRotate);
    }
  };

  const handleHover = (ev: React.MouseEvent) => {
    switch (ev.currentTarget.id) {
      case 'item1':
        border1.current.classList.add('border-line-active');
        break;

      case 'item2':
        border2.current.classList.add('border-line-active');
        break;

      case 'item3':
        border3.current.classList.add('border-line-active');
        break;
    }
  };

  const handleLeave = (ev: React.MouseEvent) => {
    switch (ev.currentTarget.id) {
      case 'item1':
        if (router.pathname !== '/projects')
          border1.current.classList.remove('border-line-active');
        break;

      case 'item2':
        if (router.pathname !== '/skills')
          border2.current.classList.remove('border-line-active');
        break;

      case 'item3':
        if (router.pathname !== '/curriculum')
          border3.current.classList.remove('border-line-active');
        break;
    }
  };

  return (
    <>
      <nav className='navbar' ref={navbar}>
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

        <ul className='nav-links' ref={ref}>
          <li
            className='item'
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            id='item1'
            ref={projects}>
            <Link href='/projects'>
              <a title='Projects Page' onClick={handleClick}>
                PROJECTS
              </a>
            </Link>
            <div className='border-line' ref={border1} />
          </li>
          <li
            className='item'
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            id='item2'
            ref={skills}>
            <Link href='/skills'>
              <a title='skills Page' onClick={handleClick}>
                SKILLS
              </a>
            </Link>
            <div className='border-line' ref={border2} />
          </li>
          <li
            className='item'
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            id='item3'
            ref={curriculum}>
            <Link href='/curriculum'>
              <a title='Curriculum Page' onClick={handleClick}>
                CURRICULUM
              </a>
            </Link>
            <div className='border-line' ref={border3} />
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

        .navbar-active {
          box-shadow: inset 0px 100px 25px 0px ${colors.black},
            inset 0px 0px 8px 0px ${colors.black};
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
          transition: height 0.5s ease-in-out;
        }

        .item {
          width: 80%;
          justify-content: center;
          display: none;
          border-top: 1px solid gray;
          padding: 20px;

          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-active {
          height: calc(100vh - 50px);
        }

        .items-active {
          opacity: 1;
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
            box-shadow: none;
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
            opacity: 1;
            display: flex;
            flex-direction: column;
            width: initial;
          }

          .github1 {
            display: none;
          }

          .github2 {
            display: block;
          }

          .border-line {
            height: 1px;
            width: 0;
            background-color: #fff;
            transition: 0.3s ease width;
          }

          .border-line-active {
            width: 100%;
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

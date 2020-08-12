import { colors } from '../../styles/theme';

function NavBar(): JSX.Element {
  return (
    <>
      <nav className='navbar'>
        <a className='logo' href='#'>
          Aram Ceballos
        </a>
      </nav>

      <style jsx>{`
        .navbar {
          width: 100vw;
          height: 60px;
          background-color: ${colors.black};
          display: flex;
          align-items: center;
        }

        .logo {
          color: ${colors.white};
          margin-left: 15px;
          font-size: 23px;
        }
      `}</style>
    </>
  );
}

export default NavBar;

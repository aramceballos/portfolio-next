import AppLayout from '@components/AppLayout';
import { colors } from '../../styles/theme';

const Skills = () => {
  return (
    <>
      <AppLayout title='Skills'>
        <section>
          <div className='skills-section'>
            <p className='title'>FRONTEND AND MOBILE DEVELOPMENT</p>
            <div>
              <p className='item'>HTML5</p>
              <p className='item'>CSS3</p>
              <p className='item'>JavaScript</p>
              <p className='item'>TypeScript</p>
              <p className='item'>React.JS</p>
              <p className='item'>React Native</p>
              <p className='item'>Redux</p>
              <p className='item'>GraphQL</p>
              <p className='item'>Next.JS</p>
              <p className='item'>Jest</p>
              <p className='item'>Server Side Rendering</p>
              <p className='item'>Static Site Generation</p>
              <p className='item'>Responsive Design</p>
              <p className='item'>Webpack</p>
              <p className='item'>CSS Grid Layouts</p>
              <p className='item'>Apollo GraphQL</p>
            </div>
          </div>
          <div className='skills-section'>
            <p className='title'>BACKEND DEVELOPMENT</p>
            <div>
              <p className='item'>Node.JS</p>
              <p className='item'>Express.JS</p>
              <p className='item'>Jest</p>
              <p className='item'>Python</p>
              <p className='item'>Flask</p>
              <p className='item'>Go</p>
              <p className='item'>WebSockets</p>
              <p className='item'>Rest APIs</p>
              <p className='item'>Apollo GraphQL</p>
            </div>
          </div>
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          margin-top: 55px;
          background-color: ${colors.blackPearl};
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
          height: 100%;
        }

        p {
          font-family: 'Poppins';
          color: #ececec;
        }

        .skills-section {
          padding-bottom: 20px;
          margin: 0 14px;
        }

        .title {
          font-size: 19px;
          font-weight: 400;
          margin-left: 15px;
        }

        .item {
          font-size: 15px;
          font-weight: 200;
        }
      `}</style>
    </>
  );
};

export default Skills;

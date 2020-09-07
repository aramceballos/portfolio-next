import React from 'react';
import AppLayout from '@components/AppLayout';

const Curriculum = () => (
  <>
    <AppLayout title='Curriculum'>
      <div className='container'>
        <img
          className='image'
          src='https://res.cloudinary.com/dh5iufklf/image/upload/v1592981791/Desarrollador_Frontend_nnkjpx.png'
          alt='curriculum'
        />
      </div>
    </AppLayout>

    <style jsx>{`
      .container {
        display: flex;
        margin-top: 60px;
      }

      .image {
        width: 100vw;
        max-width: 600px;
        margin: 0 auto;
        height: 100%;
      }
    `}</style>
  </>
);

export default Curriculum;

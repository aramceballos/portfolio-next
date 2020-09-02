import React from 'react';
import SimpleCard from '@components/SimpleCard';
import { breakpoints } from '../../styles/theme';

const CertificateList = ({ certificates }: CertificateListProps) => {
  return (
    <>
      <div className='cards-wrapper'>
        {certificates.map((certificate) => (
          <SimpleCard
            key={certificate._id}
            name={certificate.name}
            src={certificate.src}
          />
        ))}
      </div>

      <style jsx>{`
        .cards-wrapper {
          max-width: 750px;
          display: flex;
          flex-wrap: wrap;
          margin: 50px auto 0;
          box-shadow: 0px 0px 7px 1px #adadad;
          background-color: #f5f5f5;
        }

        @media screen and (min-width: ${breakpoints.laptop}) {
          .card-wrapper {
            margin: 60px auto 0;
          }
        }
      `}</style>
    </>
  );
};

export default CertificateList;

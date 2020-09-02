import React from 'react';
import { GetStaticProps } from 'next';
import fetch from 'isomorphic-unfetch';
import AppLayout from '@components/AppLayout';
import CertificateList from '@components/CertificateList';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://portfolio-rest-api.aram.vercel.app/api/certificates',
  );
  const { data }: TAPICertificatesResponse = await response.json();

  return {
    props: {
      certificates: data,
    },
  };
};

const Certificates = ({ certificates }: { certificates: TCertificate[] }) => {
  return (
    <AppLayout title='Certificates'>
      <CertificateList certificates={certificates} />
    </AppLayout>
  );
};

export default Certificates;

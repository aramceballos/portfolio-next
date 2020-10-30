import React from 'react';
import { GetServerSideProps } from 'next';
import fetch from 'isomorphic-unfetch';
import AppLayout from 'components/AppLayout';
import ProjectList from 'components/ProjectList';

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    'https://portfolio-rest-api.aram.vercel.app/api/projects',
  );
  const { data }: TAPIProjectsResponse = await response.json();

  return {
    props: {
      projects: data,
    },
  };
};

const Projects = ({ projects }: { projects: TProject[] }) => {
  return (
    <AppLayout title='Projects'>
      <ProjectList projects={projects} />
    </AppLayout>
  );
};

export default Projects;

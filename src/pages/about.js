import React from 'react';
import AboutMe from '../components/About/AboutMe';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <AboutMe />
      <Timeline/>
    </Layout>
  );
};

export default AboutPage;

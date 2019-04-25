import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About me</h1>
        <p>Hi there!</p>
        <p>I'm Dramane, Bamako base Full-stack Developer, JavaScript guru and Designer</p>
        <p>I like chalenges, creativity is part of my skills set.</p>
        <p>Get in touch with me <Link to="/contact">Here</Link></p>
      </Layout>
    </div>
  )
}

export default AboutPage;
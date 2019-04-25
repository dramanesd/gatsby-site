import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Let's get in touch !</h1>
        <p>Email: ddramane63@gmail.com</p>
        <p>Phone: 74 16 36 12</p>
        <p>Need a developer? <a href="https://twitter.com/ddramane63" target="blanc">Contact me.</a></p>
      </Layout>
    </div>
  )
}

export default ContactPage;
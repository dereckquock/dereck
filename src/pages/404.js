import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout path="404">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <h2>{`🧐 This page doesn't exist`}</h2>
  </Layout>
);

export default NotFoundPage;

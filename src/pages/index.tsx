import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';
import Mondrian from 'components/mondrian';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container--full-page">
      <Mondrian />
    </div>
  </Layout>
);

export default IndexPage;

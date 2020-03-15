import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';
import Mondrian from 'components/mondrian';

import { styled } from 'styles/provider';

const FullPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FullPageContainer>
      <Mondrian />
    </FullPageContainer>
  </Layout>
);

export default IndexPage;

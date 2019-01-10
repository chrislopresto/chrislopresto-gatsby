import * as React from 'react';
import RevealJsSlideDeck from '../../components/RevealJsSlideDeck';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default () => {
  return (
    <Layout>
      <SEO title="Hot Swapping Our Rails Front End In Secret - A Rebrand Story" />
      <RevealJsSlideDeck slug="betterment-rebranding-bonanza" />
    </Layout>
  );
};

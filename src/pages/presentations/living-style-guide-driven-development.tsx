import React from 'react';
import { RevealJsSlideDeck } from '../../components/RevealJsSlideDeck';
import { MainLayout } from '../../layouts/MainLayout';
import SEO from '../../components/SEO';

export default () => (
  <MainLayout>
    <SEO title="Living Style Guide Driven Development" />
    <RevealJsSlideDeck title="living-style-guide-driven-development" slug="living-style-guide-driven-development" />
  </MainLayout>
);

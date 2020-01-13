import React from 'react';
import { RevealJsSlideDeck } from '../../components/RevealJsSlideDeck';
import { MainLayout } from '../../layouts/MainLayout';
import SEO from '../../components/SEO';

export default () => (
  <MainLayout>
    <SEO title="Hot Swapping Our Rails Front End In Secret - A Rebrand Story" />
    <RevealJsSlideDeck title="betterment-rebranding-bonanza" slug="betterment-rebranding-bonanza" />
  </MainLayout>
);

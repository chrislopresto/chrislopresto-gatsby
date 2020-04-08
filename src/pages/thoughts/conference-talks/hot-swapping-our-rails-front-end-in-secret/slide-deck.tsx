import React from 'react';
import { RevealJsSlideDeck } from '../../../../components/reveal-js-slide-deck';
import { SEO } from '../../../../components/seo';
import { ChromelessLayout } from '../../../../layouts/chromeless-layout';

export default () => (
  <ChromelessLayout>
    <SEO title="Hot Swapping Our Rails Front End In Secret - A Rebrand Story" />
    <RevealJsSlideDeck title="betterment-rebranding-bonanza" slug="betterment-rebranding-bonanza" />
  </ChromelessLayout>
);

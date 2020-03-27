import React from 'react';
import { RevealJsSlideDeck } from '../../components/reveal-js-slide-deck';
import { SEO } from '../../components/seo';
import { ChromelessLayout } from '../../layouts/chromeless-layout';

export default () => (
  <ChromelessLayout>
    <SEO title="Living Style Guide Driven Development" />
    <RevealJsSlideDeck title="living-style-guide-driven-development" slug="living-style-guide-driven-development" />
  </ChromelessLayout>
);

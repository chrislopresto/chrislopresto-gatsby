import React from 'react';
import { RevealJsSlideDeck } from './RevealJsSlideDeck';

export default { title: 'Slide Deck' };

export const asIs = () => (
  <RevealJsSlideDeck slug="living-style-guide-driven-development" title="Living Style Guide Driven Development" />
);
export const withoutControls = () => (
  <RevealJsSlideDeck
    slug="living-style-guide-driven-development"
    title="Living Style Guide Driven Development"
    showControls={false}
  />
);
export const specificSize = () => (
  <RevealJsSlideDeck
    slug="living-style-guide-driven-development"
    title="Living Style Guide Driven Development"
    width="300px"
    height="169px"
    showControls={false}
  />
);

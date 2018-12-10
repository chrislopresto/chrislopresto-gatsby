import * as React from 'react';
import styled from '../theme/styled-components';

interface Props {
  slug: 'living-style-guide-driven-development' | 'hot-swapping-our-rails-front-end-in-secret';
}

const Deck = styled.iframe`
  display: block;
  border: none;
  height: 100vh;
  width: 100vw;
`;

const RevealJsSlideDeck: React.SFC = ({ slug }: Props) => {
  let src = `https://chrislopresto-rails.herokuapp.com/presentations/${slug}?ph=900&pw=1600`
  return <Deck src={src} />;
}

export default RevealJsSlideDeck;

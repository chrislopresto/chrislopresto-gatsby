import * as React from 'react';
import styled from '../theme/styled-components';

const DEFAULT_HEIGHT = '100vh';
const DEFAULT_WIDTH = '100vw';

interface Props {
  height?: string;
  width?: string;
  showControls?: boolean;
  slug: 'living-style-guide-driven-development' | 'betterment-rebranding-bonanza';
}

const Deck = styled.iframe`
  display: block;
  border: none;
  height: ${props => props.height || DEFAULT_HEIGHT};
  width: ${props => props.width || DEFAULT_WIDTH};
`;

const RevealJsSlideDeck: React.SFC<Props> = (props) => {
  let width = props.width || DEFAULT_WIDTH;
  let height = props.height || DEFAULT_HEIGHT;
  let showControls = props.showControls === false ? 'false' : 'true';
  let src = `https://s3-us-west-2.amazonaws.com/${props.slug}-index/index.html#/?ph=${height}&pw=${width}&c=${showControls}`
  return <Deck src={src} width={width} height={height} />;
}

export default RevealJsSlideDeck;

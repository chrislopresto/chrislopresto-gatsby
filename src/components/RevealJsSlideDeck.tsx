import React from 'react';
import * as queryString from 'query-string';

const DEFAULT_HEIGHT = '100vh';
const DEFAULT_WIDTH = '100vw';

interface Props {
  title: string;
  height?: string;
  width?: string;
  showControls?: boolean;
  slug: 'living-style-guide-driven-development' | 'betterment-rebranding-bonanza';
}

const RevealJsSlideDeck: React.SFC<Props> = props => {
  let width = props.width || DEFAULT_WIDTH;
  let height = props.height || DEFAULT_HEIGHT;
  let showControls = props.showControls === false ? 'false' : 'true';
  let h = '0';
  if (typeof window !== 'undefined') {
    let parsed = queryString.parse(window.location.search);
    h = (parsed['h'] as string) || h;
  }
  let src = `https://s3-us-west-2.amazonaws.com/${props.slug}-index/index.html#/?ph=${height}&pw=${width}&c=${showControls}&h=${h}`;
  let style = {
    height,
    width
  };

  return (
    <iframe title={props.title} className="block border-0" style={style} src={src} width={width} height={height} />
  );
};

export default RevealJsSlideDeck;

/** @jsx jsx */
import { ColorPalette, TypeStyle } from '@theme-ui/style-guide';
import { jsx } from 'theme-ui';

export default { title: 'Theme' };

export const overview = () => (
  <div>
    <h1>Theme</h1>
    <div sx={{ p: 2 }}>
      <ColorPalette />
    </div>
    <h2>Body</h2>
    <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
    <h2>Hero</h2>
    <TypeStyle fontFamily="hero" fontWeight="hero" lineHeight="hero" />
  </div>
);

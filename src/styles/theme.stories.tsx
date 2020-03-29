/** @jsx jsx */
import { ColorPalette, TypeStyle } from '@theme-ui/style-guide';
import { jsx, Styled } from 'theme-ui';

export default { title: 'Theme' };

export const overview = () => (
  <div>
    <Styled.h1>Theme</Styled.h1>
    <div sx={{ p: 2 }}>
      <ColorPalette />
    </div>
    <Styled.h2>Body</Styled.h2>
    <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
    <Styled.h2>Hero</Styled.h2>
    <TypeStyle fontFamily="hero" fontWeight="hero" lineHeight="hero" />
  </div>
);

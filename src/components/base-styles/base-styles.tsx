import { Global } from '@emotion/core';
import React from 'react';
import { Theme, useThemeUI } from 'theme-ui';
import { SiteThemeColors, SiteThemeFonts } from '../../gatsby-plugin-theme-ui';

export const BaseStyles = () => {
  const { theme } = useThemeUI();
  const colors = theme?.colors as SiteThemeColors;
  const fonts = theme?.fonts as SiteThemeFonts;
  return (
    <Global
      styles={(gt: Theme) => ({
        h1: {
          fontFamily: fonts?.hero,
          lineHeight: 0.85,
          fontSize: '4rem',
          marginBottom: '.5rem',
          textShadow: `3px 3px 0px ${colors?.shadow}`
        },
        h2: {
          fontFamily: fonts?.hero,
          fontSize: '1.5rem',
          lineHeight: 0.85,
          marginBottom: '.25rem',
          textShadow: `2px 2px 0px ${colors?.shadow}`
        },
        p: {
          fontSize: '14px',
          lineHeight: 1.15
        }
      })}
    />
  );
};

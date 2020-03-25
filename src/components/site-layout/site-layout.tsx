import React from 'react';
import { Box, BoxProps } from 'theme-ui';
import { Header, Main, Footer } from './components';

type SiteLayoutVariant = 'default' | 'constrained';

interface SiteLayoutProps extends BoxProps {
  children: React.ReactNode;
  variant?: SiteLayoutVariant;
}

const SITE_LAYOUT_MAX_WIDTH = 1600;

const variantSx: Record<SiteLayoutVariant, BoxProps['sx']> = {
  default: {},
  constrained: {
    maxWidth: `${SITE_LAYOUT_MAX_WIDTH}px`,
    mx: 'auto'
  }
};

const SiteLayout = ({ children, sx, variant = 'default', ...props }: SiteLayoutProps) => {
  return (
    <Box
      sx={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', height: '100vh', ...variantSx[variant], ...sx }}
      {...props}
    >
      {children}
    </Box>
  );
};

SiteLayout.Header = Header;
SiteLayout.Main = Main;
SiteLayout.Footer = Footer;

export { SiteLayout };

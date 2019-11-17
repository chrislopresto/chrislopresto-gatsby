import React, { ReactNode } from 'react';
import { ThemeProvider } from '../theme/styled-components';
import BaseStyles from './BaseStyles';
import { themes } from '../theme/theme';
import { SiteModeProvider, useSiteModeState } from '../theme/SiteModeContext';
import SEO from './SEO';

const Content = ({ children }: { children: ReactNode }) => {
  const siteModeState = useSiteModeState();

  return (
    <ThemeProvider theme={themes[siteModeState.mode]}>
      <>
        <SEO />
        {children}
        <BaseStyles />
      </>
    </ThemeProvider>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SiteModeProvider mode="dark">
      <Content>{children}</Content>
    </SiteModeProvider>
  );
};

export default Layout;

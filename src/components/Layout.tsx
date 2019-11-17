import * as React from 'react';
import { ThemeProvider } from '../theme/styled-components';
import BaseStyles from './BaseStyles';
import { themes } from '../theme/theme';
import { SiteModeProvider, useSiteModeState } from '../theme/SiteModeContext';
import SEO from './SEO';

const Content: React.FC = ({ children }) => {
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

const Layout: React.FC = ({ children }) => {
  return (
    <SiteModeProvider mode="dark">
      <Content>{children}</Content>
    </SiteModeProvider>
  );
};

export default Layout;

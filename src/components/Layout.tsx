import * as React from 'react';
import { ThemeProvider } from '../theme/styled-components';
import BaseStyles from './BaseStyles';
import { themes } from '../theme/theme';
import { SiteModeProvider, useSiteMode } from '../theme/SiteModeContext';
import SEO from './SEO';

const Content: React.FC = ({ children }) => {
  const [siteModeContext] = useSiteMode();

  return (
    <ThemeProvider theme={themes[siteModeContext.mode]}>
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

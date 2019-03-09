import * as React from 'react';
import { FunctionComponent } from 'react';
import { ThemeProvider } from '../theme/styled-components';
import BaseStyles from './BaseStyles';
import { themes } from '../theme/theme';
import { SiteModeProvider, useSiteMode } from '../theme/SiteModeContext';
import SEO from './SEO';

const Content: FunctionComponent = ({ children }) => {
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

const Layout: FunctionComponent = ({ children }) => {
  return (
    <SiteModeProvider mode="light">
      <Content>{children}</Content>
    </SiteModeProvider>
  );
};

export default Layout;

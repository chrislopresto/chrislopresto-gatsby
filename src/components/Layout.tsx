import * as React from 'react';
import { FunctionComponent } from 'react';
import { ThemeProvider } from '../theme/styled-components';
import BaseStyles from './BaseStyles';
import { darkTheme, lightTheme } from '../theme/theme';
import { SiteModeProvider, Mode, useSiteMode } from '../theme/SiteModeContext';
import SEO from './SEO';

interface State {
  mode: Mode;
}

const initialState: State = {
  mode: 'light'
};

const Content: FunctionComponent = ({ children }) => {
  const [siteModeContext] = useSiteMode();
  return (
    <ThemeProvider theme={siteModeContext.mode === 'dark' ? darkTheme : lightTheme}>
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
    <SiteModeProvider initialState={initialState}>
      <Content>{children}</Content>
    </SiteModeProvider>
  );
};

export default Layout;

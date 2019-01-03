import * as React from 'react';
import { ThemeProvider } from '../theme/styled-components';
import { theme } from '../theme/theme';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
      {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;

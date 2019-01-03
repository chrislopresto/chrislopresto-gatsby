import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from '../theme/styled-components';
import { theme } from '../theme/theme';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.mono};
    margin: 0;
  }
`;

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export default Layout;

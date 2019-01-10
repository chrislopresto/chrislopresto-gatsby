import * as React from 'react';
import * as fonts from '../fonts';
import { createGlobalStyle, ThemeProvider } from '../theme/styled-components';
import { theme } from '../theme/theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Marvin Visions Big';
    font-style: normal;
    font-weight: 700;
    src: local('Marvin Visions Big'), url('${fonts.MarvinVisionsBigBold}') format('woff2');
  }

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

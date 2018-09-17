import * as React from 'react'
import { theme } from '../theme/theme';
import { createGlobalStyle, ThemeProvider } from '../theme/styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.colors.accent};
    font-family: ${theme.fonts.mono};
  }
`;

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello.</h1>
        <p>My name is Chris LoPresto.</p>
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
};

import * as React from 'react'
import { theme } from '../theme/theme';
import { createGlobalStyle, ThemeProvider } from '../theme/styled-components';
import { Heading, Text } from 'rebass';
import 'sanitize.css';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.mono};
  }
`;

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Heading as='h1' color='accent'>Hello</Heading>
        <p>My name is Chris LoPresto.</p>
        <p>I'm an <Text as='span' color='accent'>engineering leader</Text> and a <Text as='span' color='accent'>musician</Text>.</p>
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
};

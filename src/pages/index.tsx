import * as React from 'react'
import { theme } from '../theme/theme';
import styled from '../theme/styled-components';
import { createGlobalStyle, ThemeProvider } from '../theme/styled-components';
import { Heading, Text } from 'rebass';
import '../index.css';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.mono};
  }
`;

const OtherThing = styled.div`
  color: ${theme.colors.accent};
`;

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Heading as='h1' color='accent' mb={2}>Hello</Heading>
        <p className='mb-4'>My name is Chris LoPresto.</p>
        <OtherThing>I am OtherThing</OtherThing>
        <OtherThing as='h3'>I am OtherThing</OtherThing>
        <Text color={['primary', 'accent']}>I have colors from Rebass</Text>
        <p className='Thing'>I have colors from Tailwind</p>
        <p>I'm an <Text as='span' color='accent'>engineering leader</Text> and a <Text as='span' color='accent'>musician</Text>.</p>
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
};

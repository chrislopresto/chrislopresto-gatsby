import * as React from 'react'
import { theme } from '../theme/theme';
import styled from '../theme/styled-components';
import { Link } from "gatsby"
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
        <h1 className='mb-6'>Talks</h1>
        <ul className='mb-4'>
          <li><Link to='/talks/hot-swapping-our-rails-front-end-in-secret'>Hot Swapping Our Rails Front End in Secret</Link></li>
          <li><Link to='/talks/living-style-guide-driven-development'>Living Style Guide Driven Development</Link></li>
        </ul>

        <h1 className='mb-6'>Other stuff</h1>
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

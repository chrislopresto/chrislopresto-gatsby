import * as React from 'react'
import { Link } from "gatsby"
import { Text, Box } from 'rebass';
import '../index.css';
import RevealJsSlideDeck from '../components/RevealJsSlideDeck';
import Layout from '../components/Layout';

export default () => {
  return (
    <Layout>
      <Box m={2}>
        <h1 className="mb-2">Hello</h1>
        <p className='mb-2'>My name is Chris LoPresto.</p>
        <p className="mb-8">I'm an engineering leader and a musician.</p>

        <h2 className='mb-2'>Talks</h2>
        <p className='mb-2'>Here are some conference talks I have given.</p>
        <p className="mb-4">
          <Link to='/presentations/hot-swapping-our-rails-front-end-in-secret' target='_blank'>
            <Text mb={1}>Hot Swapping Our Rails Front End in Secret</Text>
            <RevealJsSlideDeck slug='betterment-rebranding-bonanza' width='300px' height='169px' showControls={false} />
          </Link>
        </p>
        <p className="mb-4">
          <Link to='/presentations/living-style-guide-driven-development'>
            <Text mb={1}>Living Style Guide Driven Development</Text>
            <RevealJsSlideDeck slug='living-style-guide-driven-development' width='300px' height='169px' showControls={false} />
          </Link>
        </p>
      </Box>
    </Layout>
  )
};

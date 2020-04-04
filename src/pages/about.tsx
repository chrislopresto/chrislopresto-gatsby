/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { copyContainer } from '../gatsby-plugin-theme-ui';
import { MainLayout } from '../layouts/main-layout';
import { imageStyles } from '../styles';
import { Box } from 'theme-ui';

const headshotSizePx = 280;

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | About" />
      <SectionLayout
        sx={{
          height: '100%',
        }}
        contentSx={{
          height: '100%',
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Styled.h1 sx={{ mb: 4 }}>About Chris</Styled.h1>
          <img
            src="../../images/chris-lopresto-640.jpg"
            alt="Chris LoPresto"
            sx={{ ...imageStyles, mb: 6 }}
            width={`${headshotSizePx}px`}
            height={`${headshotSizePx}px`}
          />
          <section sx={{ mb: 7, ...copyContainer }}>
            <Styled.h2>Then</Styled.h2>
            <Styled.p sx={{ mb: 5 }}>
              Chris LoPresto grew up as an oldest child in Delaware, the oldest state. He picked up degrees in Jazz
              Performance (piano) and Computer Science at Exit 9 of the NJ Turnpike before continuing on up to New York
              City.
            </Styled.p>
            <Styled.h2>Music</Styled.h2>
            <p sx={{ mb: 5 }}>
              Chris has performed at iconic venues<sup>*</sup> and dive bars
              <sup>**</sup> around the world
              <sup>***</sup>, most notably with Roc Nation / Epic Records recording artist Hugo. Chris has performed on
              Late Night with David Letterman, Jimmy Kimmel Live!, X Factor, and morning shows that film far too early.
            </p>
            <Styled.h2>Otherwise</Styled.h2>
            <p sx={{ mb: 5 }}>
              More miscellaneously, Chris is an Eagle Scout who has visited 46 of the 50 states and ridden a private
              elevator with a pope
              <sup>****</sup>. He lives in New York City with his wife, Louise, and his dog, Roland, and is always game
              to debate which is better, cake or pie
              <sup>*****</sup>.
            </p>
          </section>
        </Box>
        <Box>
          <p sx={{ fontSize: 0, mb: 3 }}>
            ___
            <br />
            <br />
            <sup>*</sup>&nbsp;Carnegie Hall
            <br />
            <sup>**</sup>&nbsp;The Ground Floor
            <br />
            <sup>***</sup>&nbsp;Olympic arena in Beijing
            <br />
            <sup>****</sup>&nbsp;Neither of us was pope at the time
            <br />
            <sup>*****</sup>&nbsp;Cake
            <br />
          </p>
        </Box>
      </SectionLayout>
    </MainLayout>
  );
};

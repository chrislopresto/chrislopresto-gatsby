/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { copyContainer } from '../gatsby-plugin-theme-ui';
import { MainLayout } from '../layouts/main-layout';
import { imageStyles } from '../styles';
import { Box } from 'theme-ui';
import chrisLouiseSpin from '../images/chris-louise-spin.jpg';

const imageMaxWidthPx = 600;

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | About" />
      <SectionLayout
        sx={{
          height: '100%'
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
            src={chrisLouiseSpin}
            alt="Chris and Louise playing a game of ping pong"
            sx={{ ...imageStyles, mb: 6 }}
            width={`${imageMaxWidthPx}px`}
          />
          <section sx={{ mb: 7, ...copyContainer }}>
            <Styled.h2>Now</Styled.h2>
            <Styled.p sx={{ mb: 5 }}>
              Chris is a software engineering leader and musician. He lives in New York City with his wife Louise
              (pictured) and Boston Terrier Roland (surprisingly not pictured).
            </Styled.p>
            <Styled.h2>Then</Styled.h2>
            <Styled.p sx={{ mb: 5 }}>
              Chris LoPresto grew up as an oldest child in Delaware, the oldest state. He picked up degrees in Jazz
              Performance (piano) and Computer Science at Exit 9 of the NJ Turnpike before continuing on up to New York
              City.
            </Styled.p>
            <Styled.h2>Music</Styled.h2>
            <Styled.p sx={{ mb: 5 }}>
              Chris has performed at iconic venues<sup>1</sup> and dive bars
              <sup>2</sup> around the world
              <sup>3</sup>, most notably with Roc Nation / Epic Records recording artist Hugo. Chris has performed on
              Late Night with David Letterman, Jimmy Kimmel Live!, X Factor, and morning shows that film far too early.
            </Styled.p>
            <Styled.h2>Tech</Styled.h2>
            <Styled.p sx={{ mb: 5 }}>
              Chris is an an engineering leader with experience building teams and inspiring change He has a track
              record of accelerating product teams while leveling up tech teams. Over the course of his career, Chris
              has played with Patriot Missile System schematics, been CTO of a venture funded startup, given conference
              talks, and accrued several stories.
            </Styled.p>
            <Styled.h2>Otherwise</Styled.h2>
            <Styled.p sx={{ mb: 5 }}>
              More miscellaneously, Chris is an Eagle Scout who has visited 46 of the 50 states and ridden a private
              elevator with a pope
              <sup>4</sup>. He is always game to debate which is better, cake or pie
              <sup>5</sup>.
            </Styled.p>
          </section>
        </Box>
        <Box sx={copyContainer}>
          <hr sx={{ color: 'text' }} />
          <p sx={{ fontSize: 0, mb: 3 }}>
            <br />
            <sup>1</sup>&nbsp;Carnegie Hall
            <br />
            <sup>2</sup>&nbsp;The Ground Floor
            <br />
            <sup>3</sup>&nbsp;Olympic arena in Beijing
            <br />
            <sup>4</sup>&nbsp;Neither of us was pope at the time
            <br />
            <sup>5</sup>&nbsp;Cake
            <br />
          </p>
        </Box>
      </SectionLayout>
    </MainLayout>
  );
};

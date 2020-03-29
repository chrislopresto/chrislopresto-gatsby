/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { copyContainer } from '../gatsby-plugin-theme-ui';
import { MainLayout } from '../layouts/main-layout';

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | About" />
      <SectionLayout>
        <Styled.h1>About Chris</Styled.h1>
        <section sx={{ mb: 7, ...copyContainer }}>
          <Styled.p>
            Chris LoPresto grew up as an oldest child in Delaware, the oldest state. He picked up degrees in Jazz
            Performance (piano) and Computer Science at Exit 9 of the NJ Turnpike before continuing on up to New York
            City.
          </Styled.p>
          <p sx={{ mb: 5 }}>
            Chris has performed at iconic venues<sup>*</sup> and dive bars
            <sup>**</sup> around the world
            <sup>***</sup>, most notably with Roc Nation / Epic Records recording artist Hugo. Chris has performed on
            Late Night with David Letterman, Jimmy Kimmel Live!, X Factor, and morning shows that film far too early.
          </p>
          <p sx={{ mb: 5 }}>
            More miscellaneously, Chris is an Eagle Scout who has visited 46 of the 50 states and ridden a private
            elevator with a pope
            <sup>****</sup>. He lives in New York City with his wife, Louise, and his dog, Roland, and is always game to
            debate which is better, cake or pie
            <sup>*****</sup>.
          </p>
          <p sx={{ fontSize: 0 }}>
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
        </section>
      </SectionLayout>
    </MainLayout>
  );
};

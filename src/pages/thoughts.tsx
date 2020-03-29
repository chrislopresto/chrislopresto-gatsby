/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';
import { RevealJsSlideDeck } from '../components/reveal-js-slide-deck';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { MainLayout } from '../layouts/main-layout';

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | Thoughts" />
      <SectionLayout>
        <Styled.h1>Thoughts</Styled.h1>

        <section sx={{ mb: 7 }}>
          <div sx={{ mb: 5 }}>
            <Styled.h2>Talks</Styled.h2>
            <p>Here are some conference talks I have given.</p>
          </div>
          <div sx={{ mb: 6 }}>
            <Link to="/presentations/hot-swapping-our-rails-front-end-in-secret" target="_blank">
              <p>Hot Swapping Our Rails Front End in Secret</p>
              <p sx={{ mb: 3, fontSize: 0, fontWeight: 'bold' }}>RailsConf 2018</p>
              <RevealJsSlideDeck
                title="betterment-rebranding-bonanza"
                slug="betterment-rebranding-bonanza"
                width="300px"
                height="169px"
                showControls={false}
              />
            </Link>
          </div>
          <div sx={{ mb: 6 }}>
            <Link to="/presentations/living-style-guide-driven-development">
              <p>Living Style Guide Driven Development</p>
              <p sx={{ mb: 3, fontSize: 0, fontWeight: 'bold' }}>EmberConf 2016</p>
              <RevealJsSlideDeck
                title="living-style-guide-driven-development"
                slug="living-style-guide-driven-development"
                width="300px"
                height="169px"
                showControls={false}
              />
            </Link>
          </div>
        </section>
      </SectionLayout>
    </MainLayout>
  );
};

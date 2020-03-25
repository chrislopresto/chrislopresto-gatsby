import React from 'react';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { MainLayout } from '../layouts/main-layout';
import { Link } from 'gatsby';
import { RevealJsSlideDeck } from '../components/reveal-js-slide-deck';

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | Thoughts" />
      <SectionLayout>
        <h1>Thoughts</h1>

        <section className="mb-10">
          <h2 className="mb-1 leading-none">Talks</h2>
          <p className="mb-5">Here are some conference talks I have given.</p>
          <div className="mb-6">
            <Link to="/presentations/hot-swapping-our-rails-front-end-in-secret" target="_blank">
              <p>Hot Swapping Our Rails Front End in Secret</p>
              <p className="mb-2 text-xs font-bold">RailsConf 2018</p>
              <RevealJsSlideDeck
                title="betterment-rebranding-bonanza"
                slug="betterment-rebranding-bonanza"
                width="300px"
                height="169px"
                showControls={false}
              />
            </Link>
          </div>
          <div className="mb-6">
            <Link to="/presentations/living-style-guide-driven-development">
              <p>Living Style Guide Driven Development</p>
              <p className="mb-2 text-xs font-bold">EmberConf 2016</p>
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

import { Link } from 'gatsby';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import RevealJsSlideDeck from '../components/RevealJsSlideDeck';
import SEO from '../components/SEO';
import '../index.css';

export default () => {
  return (
    <Layout>
      <SEO title="Chris LoPresto | Engineering leader. Musician." />
      <div className="p-3 md:p-5 text-primary font-mono">
        <section className="mb-10 max-w-3xl">
          <Hero />
          <p className="text-sm">
            Engineering leader with deep front end expertise. Experience building teams and inspiring change.
            Professional musician.
          </p>
        </section>

        <section className="mb-10 max-w-3xl">
          <h2 className="mb-2 leading-none">Bio</h2>
          <p className="mb-5">
            Chris LoPresto grew up as an oldest child in Delaware, the oldest state. He picked up degrees in Jazz
            Performance (piano) and Computer Science at Exit 9 of the NJ Turnpike before continuing on up to New York
            City.
          </p>
          <p className="mb-5">
            Chris has performed at iconic venues<sup className="text-xs">*</sup> and dive bars
            <sup className="text-xs">**</sup> around the world
            <sup className="text-xs">***</sup>, most notably with Roc Nation / Epic Records recording artist Hugo. Chris
            has performed on Late Night with David Letterman, Jimmy Kimmel Live!, X Factor, and morning shows that film
            far too early.
          </p>
          <p className="mb-5">
            More miscellaneously, Chris is an Eagle Scout who has visited 46 of the 50 states and ridden a private
            elevator with a pope
            <sup className="text-xs">****</sup>. He lives in New York City with his wife, Louise, and his dog, Roland,
            and is always game to debate which is better, cake or pie
            <sup className="text-xs">*****</sup>.
          </p>
          <p className="mb-2 text-sm">
            ___
            <br />
            <br />
            <sup className="text-xs">*</sup>&nbsp;Carnegie Hall
            <br />
            <sup className="text-xs">**</sup>&nbsp;The Ground Floor
            <br />
            <sup className="text-xs">***</sup>&nbsp;Olympic arena in Beijing
            <br />
            <sup className="text-xs">****</sup>&nbsp;Neither of us was pope at the time
            <br />
            <sup className="text-xs">*****</sup>&nbsp;Cake
            <br />
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 leading-none">Talks</h2>
          <p className="mb-2">Here are some conference talks I have given.</p>
          <div className="mb-6">
            <Link to="/presentations/hot-swapping-our-rails-front-end-in-secret" target="_blank">
              <p>Hot Swapping Our Rails Front End in Secret</p>
              <p className="mb-2 text-xs font-bold">EmberConf 2016</p>
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
              <p className="mb-2 text-xs font-bold">RailsConf 2018</p>
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
      </div>
    </Layout>
  );
};

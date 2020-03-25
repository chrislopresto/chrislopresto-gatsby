import React from 'react';
import { SEO } from '../components/seo';
import { MainLayout } from '../layouts/main-layout';
import { SectionLayout } from '../components/section-layout';

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | About" />
      <SectionLayout>
        <h1>About Chris</h1>
        <section className="mb-10 max-w-3xl">
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
      </SectionLayout>
    </MainLayout>
  );
};

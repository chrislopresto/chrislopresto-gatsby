import React from 'react';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { MainLayout } from '../layouts/main-layout';

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | About" />
      <SectionLayout>
        <h1>Gear</h1>
        <p>Some gear I use for music, tech, and life.</p>
      </SectionLayout>
    </MainLayout>
  );
};

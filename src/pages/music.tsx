import React from 'react';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { MainLayout } from '../layouts/main-layout';

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | Music" />
      <SectionLayout>
        <h1>Music</h1>
        <p>Music I play</p>
      </SectionLayout>
    </MainLayout>
  );
};

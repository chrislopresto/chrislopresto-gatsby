import React from 'react';
import { SiteLayout } from '.';

export default { title: 'Layouts / Site' };

export const example = () => (
  <SiteLayout>
    <SiteLayout.Header>
      <p>Header content</p>
    </SiteLayout.Header>
    <SiteLayout.Main>
      <p>Main content</p>
    </SiteLayout.Main>
    <SiteLayout.Footer>
      <p>Footer content</p>
    </SiteLayout.Footer>
  </SiteLayout>
);

export const constrained = () => (
  <SiteLayout variant="constrained">
    <SiteLayout.Header>
      <p>Header content</p>
    </SiteLayout.Header>
    <SiteLayout.Main>
      <p>Main content</p>
    </SiteLayout.Main>
    <SiteLayout.Footer>
      <p>Footer content</p>
    </SiteLayout.Footer>
  </SiteLayout>
);

export const styled = () => (
  <SiteLayout sx={{ border: 'solid 10px magenta', borderRadius: 2 }}>
    <SiteLayout.Header sx={{ bg: 'cyan', color: 'magenta', p: 2 }}>
      <p>Header content</p>
    </SiteLayout.Header>
    <SiteLayout.Main sx={{ bg: 'black', color: 'magenta', p: 2 }}>
      <p>Main content</p>
    </SiteLayout.Main>
    <SiteLayout.Footer sx={{ bg: 'cyan', color: 'magenta', p: 2 }}>
      <p>Footer content</p>
    </SiteLayout.Footer>
  </SiteLayout>
);

import React, { ReactNode } from 'react';
import { SiteLayout } from '../site-layout';
import { Nav } from '../nav';
import { SectionLayout } from '../section-layout';
import { ChromelessContentLayout } from '../chromeless-content-layout';

interface MainContentLayoutProps {
  children?: ReactNode;
}

export const MainContentLayout = ({ children }: MainContentLayoutProps) => {
  return (
    <ChromelessContentLayout>
      <SiteLayout>
        <SiteLayout.Header>
          <SectionLayout sx={{ mb: 4 }}>
            <Nav />
          </SectionLayout>
        </SiteLayout.Header>
        <SiteLayout.Main>{children}</SiteLayout.Main>
      </SiteLayout>
    </ChromelessContentLayout>
  );
};

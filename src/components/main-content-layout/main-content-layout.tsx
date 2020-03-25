import React, { ReactNode } from 'react';
import '../../styles/core.css';
import { SiteLayout } from '../site-layout';
import { Nav } from '../nav';
import { SectionLayout } from '../section-layout';

interface MainContentLayoutProps {
  children?: ReactNode;
}

export const MainContentLayout = ({ children }: MainContentLayoutProps) => {
  return (
    <SiteLayout>
      <SiteLayout.Header>
        <SectionLayout>
          <Nav />
        </SectionLayout>
      </SiteLayout.Header>
      <SiteLayout.Main>{children}</SiteLayout.Main>
    </SiteLayout>
  );
};

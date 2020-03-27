/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from 'theme-ui';
import { copyContainer } from '../../gatsby-plugin-theme-ui';
import { MainContentLayout } from '../main-content-layout';
import { SectionLayout } from '../section-layout';

interface BlogContentLayoutProps {
  children?: ReactNode;
}

export const BlogContentLayout = ({ children }: BlogContentLayoutProps) => {
  return (
    <MainContentLayout>
      <SectionLayout>
        <div sx={{ ...copyContainer }}>{children}</div>
      </SectionLayout>
    </MainContentLayout>
  );
};

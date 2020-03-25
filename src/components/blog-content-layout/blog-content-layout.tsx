import React, { ReactNode } from 'react';
import '../../styles/blog.css';
import { MainContentLayout } from '../main-content-layout';
import { SectionLayout } from '../section-layout';

interface BlogContentLayoutProps {
  children?: ReactNode;
}

export const BlogContentLayout = ({ children }: BlogContentLayoutProps) => {
  return (
    <MainContentLayout>
      <SectionLayout>
        <div className="BlogContentLayout max-w-3xl text-primary font-mono">{children}</div>
      </SectionLayout>
    </MainContentLayout>
  );
};

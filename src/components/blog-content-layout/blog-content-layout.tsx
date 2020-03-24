import React, { ReactNode } from 'react';
import '../../blog.css';
import { Hero } from '../hero/hero';
import { MainContentLayout } from '../main-content-layout';

interface BlogContentLayoutProps {
  children?: ReactNode;
}

export const BlogContentLayout = ({ children }: BlogContentLayoutProps) => {
  return (
    <MainContentLayout>
      <div className="p-3 md:p-5">
        <Hero />
        <div className="BlogContentLayout max-w-3xl text-primary font-mono">{children}</div>
      </div>
    </MainContentLayout>
  );
};

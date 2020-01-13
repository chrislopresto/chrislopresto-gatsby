import React, { ReactNode } from 'react';
import '../blog.css';
import { Hero } from '../components/Hero';
import { MainContentLayout } from './MainContentLayout';

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

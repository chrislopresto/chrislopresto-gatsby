import React, { ReactNode } from 'react';
import { BlogContentLayout } from '../components/BlogContentLayout';
import { BaseLayout } from './BaseLayout';

interface BlogLayoutProps {
  children?: ReactNode;
}

export const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <BaseLayout layout={BlogContentLayout}>{children}</BaseLayout>;
};

// Provide default export for Gatsby
export default BlogLayout;

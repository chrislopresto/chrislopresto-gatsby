import React, { ReactNode } from 'react';
import '../blog.css';
import Layout from './Layout';
import { Hero } from '../components/Hero';

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <div className="p-3 md:p-5">
        <Hero />
        <div className="BlogLayout max-w-3xl text-primary font-mono">{children}</div>
      </div>
    </Layout>
  );
};

export default BlogLayout;

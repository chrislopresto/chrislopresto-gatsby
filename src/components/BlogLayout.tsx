import React, { ReactNode } from 'react';
import '../blog.css';
import Layout from './Layout';

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <div className="p-3 md:p-5 text-primary font-mono">{children}</div>
    </Layout>
  );
};

export default BlogLayout;

import React from 'react';
import { BlogContentLayout } from './BlogContentLayout';

export default { title: 'Content Layouts / Blog' };

export const asIs = () => (
  <BlogContentLayout>
    <p>I am content</p>
    <p>I am content</p>
    <p>I am content</p>
  </BlogContentLayout>
);

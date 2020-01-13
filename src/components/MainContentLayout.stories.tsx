import React from 'react';
import { MainContentLayout } from './MainContentLayout';

export default { title: 'Content Layouts / Main' };

export const asIs = () => (
  <MainContentLayout>
    <p>I am content</p>
    <p>I am content</p>
    <p>I am content</p>
  </MainContentLayout>
);

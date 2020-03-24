import React from 'react';
import { BlogContentLayout } from '.';
import { fontObserverDecorator } from '../../fonts/font-observer.storybook';

export default { title: 'Content Layouts / Blog', decorators: [fontObserverDecorator] };

export const asIs = () => (
  <BlogContentLayout>
    <p>I am content</p>
    <p>I am content</p>
    <p>I am content</p>
  </BlogContentLayout>
);

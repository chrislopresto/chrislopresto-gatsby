import React from 'react';
import { BlogContentLayout } from '.';
import { fontObserverDecorator } from '../../fonts/font-observer.storybook';

export default { title: 'Layouts / Content', decorators: [fontObserverDecorator] };

export const blog = () => (
  <BlogContentLayout>
    <p>I am content</p>
    <p>I am content</p>
    <p>I am content</p>
  </BlogContentLayout>
);

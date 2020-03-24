import { StoryFn } from '@storybook/addons';
import React, { ReactNode } from 'react';
import { FontLoadDispatch } from '../../components/font-load-dispatch';

export const fontLoadingSliceDecorator = (storyFn: StoryFn<ReactNode>) => (
  <>
    <FontLoadDispatch />
    {storyFn()}
  </>
);

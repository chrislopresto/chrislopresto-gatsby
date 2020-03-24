import React from 'react';
import { Hero } from '.';
import { fontObserverDecorator } from '../../fonts/font-observer.storybook';

export default { title: 'Hero' };

export const fontFallback = () => <Hero />;

export const fontLoaded = () => <Hero />;
fontLoaded.story = {
  decorators: [fontObserverDecorator]
};

export const styled = () => <Hero className="p-4 border-dashed border-teal-400 border-4" />;
styled.story = {
  decorators: [fontObserverDecorator]
};

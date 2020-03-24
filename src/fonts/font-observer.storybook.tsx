import { StoryFn } from '@storybook/addons';
import React, { ReactNode } from 'react';
import { FontObserver } from 'react-with-async-fonts';

const fonts = { hero: 'Marvin Visions Big' };
// @ts-ignore incorrect FontObserver children types */}
export const fontObserverDecorator = (story: StoryFn<ReactNode>) => <FontObserver {...fonts}>{story()}</FontObserver>;

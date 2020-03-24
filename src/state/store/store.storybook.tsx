import { StoryFn } from '@storybook/addons';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const storeDecorator = (storyFn: StoryFn<ReactNode>) => <Provider store={store}>{storyFn()}</Provider>;

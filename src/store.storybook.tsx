import React, { ReactNode } from 'react';
import store from './store';
import { StoryFn } from '@storybook/addons';
import { Provider } from 'react-redux';

export const storeDecorator = (storyFn: StoryFn<ReactNode>) => <Provider store={store}>{storyFn()}</Provider>;

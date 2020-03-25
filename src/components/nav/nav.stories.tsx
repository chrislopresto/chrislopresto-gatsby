import React from 'react';
import { Nav } from '.';
import { NavPanel } from './components';
import { action } from '@storybook/addon-actions';

export default { title: 'Nav' };

export const nav = () => <Nav />;
export const navPanel = () => <NavPanel onDismiss={action('onDismiss')} />;

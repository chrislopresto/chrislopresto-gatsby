import React from 'react';
import { Hero } from './Hero';

export default { title: 'Hero' };

export const asIs = () => <Hero />;

export const withClassName = () => <Hero className="p-4 border-dashed border-teal-400 border-4" />;

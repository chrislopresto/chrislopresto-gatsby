import React from 'react';
import { Hero } from '.';

export default { title: 'Hero' };

export const fontFallback = () => <Hero />;

export const fontLoaded = () => <Hero />;

export const styled = () => <Hero className="p-4 border-dashed border-teal-400 border-4" />;

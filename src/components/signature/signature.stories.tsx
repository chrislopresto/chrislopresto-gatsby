import React from 'react';
import { Signature, getWidth, getHeight } from '.';

export default { title: 'Signature' };

export const example = () => <Signature />;

const constrainedHeightPx = 24;
export const constrainedHeight = () => (
  <Signature
    className="text-teal-400 border-2 border-dashed border-purple-400"
    style={{ width: `${getWidth(constrainedHeightPx)}px`, height: `${constrainedHeightPx}px` }}
  />
);
const constrainedWidthPx = 100;
export const constrainedWidth = () => (
  <Signature
    className="text-teal-400 border-2 border-dashed border-purple-400"
    style={{ height: `${getHeight(constrainedWidthPx)}px`, width: `${constrainedWidthPx}px` }}
  />
);
export const styled = () => <Signature className="p-4 text-teal-400 max-w-xs" />;

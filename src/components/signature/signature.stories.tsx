import React from 'react';
import { Signature } from '.';

export default { title: 'Signature' };

export const asIs = () => <Signature />;

export const styled = () => <Signature className="p-4 text-teal-400 max-w-xs" />;

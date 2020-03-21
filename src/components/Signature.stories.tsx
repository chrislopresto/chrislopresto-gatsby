import React from 'react';
import { Signature } from './Signature';

export default { title: 'Signature' };

export const asIs = () => <Signature />;

export const withClassName = () => <Signature className="p-4 text-teal-400 max-w-xs" />;

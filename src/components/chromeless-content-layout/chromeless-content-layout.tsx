import React, { ReactNode } from 'react';
import { BaseStyles } from '../base-styles';

interface ChromelessContentLayoutProps {
  children?: ReactNode;
}

export const ChromelessContentLayout = ({ children }: ChromelessContentLayoutProps) => (
  <>
    <BaseStyles />
    {children}
  </>
);

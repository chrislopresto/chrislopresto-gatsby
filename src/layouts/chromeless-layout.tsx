import React, { ReactNode } from 'react';
import { ChromelessContentLayout } from '../components/chromeless-content-layout';
import { BaseLayout } from './base-layout';

interface ChromelessLayoutProps {
  children?: ReactNode;
}

export const ChromelessLayout = ({ children }: ChromelessLayoutProps) => {
  return <BaseLayout layout={ChromelessContentLayout}>{children}</BaseLayout>;
};

// Provide default export for Gatsby
export default ChromelessLayout;

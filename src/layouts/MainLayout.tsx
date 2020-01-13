import React, { ReactNode } from 'react';
import { MainContentLayout } from '../components/MainContentLayout';
import { BaseLayout } from './BaseLayout';

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <BaseLayout layout={MainContentLayout}>{children}</BaseLayout>;
};

// Provide default export for Gatsby
export default MainLayout;

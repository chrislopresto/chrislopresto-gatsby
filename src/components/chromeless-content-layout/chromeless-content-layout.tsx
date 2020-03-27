import React, { ReactNode } from 'react';
import '../../styles/core.css';

interface ChromelessContentLayoutProps {
  children?: ReactNode;
}

export const ChromelessContentLayout = ({ children }: ChromelessContentLayoutProps) => <>{children}</>;

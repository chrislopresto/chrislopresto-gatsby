import React, { ReactNode } from 'react';
import '../../index.css';

interface MainContentLayoutProps {
  children?: ReactNode;
}

export const MainContentLayout = ({ children }: MainContentLayoutProps) => {
  return (
    <div className="flex justify-center">
      <div>{children}</div>
    </div>
  );
};

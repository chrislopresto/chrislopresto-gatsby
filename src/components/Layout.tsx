import React, { ReactNode } from 'react';
import { FontObserver } from 'react-with-async-fonts';
import { SiteModeProvider } from '../theme/SiteModeContext';
import SEO from './SEO';
import '../index.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SiteModeProvider mode="dark">
      {/*
        // @ts-ignore incorrect FontObserver children types */}
      <FontObserver hero="Marvin Visions Big">
        <>
          <SEO />
          {children}
        </>
      </FontObserver>
    </SiteModeProvider>
  );
};

export default Layout;

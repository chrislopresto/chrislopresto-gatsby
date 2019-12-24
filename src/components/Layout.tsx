import React, { ReactNode } from 'react';
import { FontObserver } from 'react-with-async-fonts';
import { SiteModeProvider, useSiteModeState } from '../theme/SiteModeContext';
import SEO from './SEO';

const Content = ({ children }: { children: ReactNode }) => {
  const siteModeState = useSiteModeState();

  return (
    // @ts-ignore incorrect FontObserver children types
    <FontObserver hero="Marvin Visions Big">
      <div className={`mode-${siteModeState.mode}`}>
        <SEO />
        {children}
      </div>
    </FontObserver>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SiteModeProvider mode="dark">
      <Content>{children}</Content>
    </SiteModeProvider>
  );
};

export default Layout;

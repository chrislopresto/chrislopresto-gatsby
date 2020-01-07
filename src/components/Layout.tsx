import React, { ReactNode } from 'react';
import { FontObserver } from 'react-with-async-fonts';
import SEO from './SEO';
import '../index.css';
import { Provider } from 'react-redux';
import store from '../store';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      {/*
        // @ts-ignore incorrect FontObserver children types */}
      <FontObserver hero="Marvin Visions Big">
        <div className="flex justify-center">
          <div>
            <SEO />
            {children}
          </div>
        </div>
      </FontObserver>
    </Provider>
  );
};

export default Layout;

import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { FontObserver } from 'react-with-async-fonts';
import SEO from '../components/SEO';
import '../index.css';
import store from '../store';

interface BaseLayoutProps {
  children: ReactNode;
  layout: FC;
}

export const BaseLayout = ({ children, layout: Layout }: BaseLayoutProps) => {
  return (
    <Provider store={store}>
      {/*
        // @ts-ignore incorrect FontObserver children types */}
      <FontObserver hero="Marvin Visions Big">
        <Layout>
          <SEO />
          {children}
        </Layout>
      </FontObserver>
    </Provider>
  );
};

import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { FontObserver } from 'react-with-async-fonts';
import { SEO } from '../components/seo';
import '../styles/core.css';
import { store } from '../state/store';
import { FontLoadDispatch } from '../components/font-load-dispatch';
import { ThemeProvider } from 'theme-ui';
import themeUiTheme from '../gatsby-plugin-theme-ui';
import { BaseStyles } from '../components/base-styles';

interface BaseLayoutProps {
  children: ReactNode;
  layout: FC;
}

export const BaseLayout = ({ children, layout: Layout }: BaseLayoutProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeUiTheme}>
        <BaseStyles />
        {/*
        // @ts-ignore incorrect FontObserver children types */}
        <FontObserver hero="Marvin Visions Big">
          <FontLoadDispatch />
          <Layout>
            <SEO />
            {children}
          </Layout>
        </FontObserver>
      </ThemeProvider>
    </Provider>
  );
};

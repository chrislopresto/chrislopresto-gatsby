import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { FontObserver } from 'react-with-async-fonts';
import { ThemeProvider } from 'theme-ui';
import { FontLoadDispatch } from '../components/font-load-dispatch';
import { SEO } from '../components/seo';
import themeUiTheme from '../gatsby-plugin-theme-ui';
import { store } from '../state/store';

interface BaseLayoutProps {
  children: ReactNode;
  layout: FC;
}

export const BaseLayout = ({ children, layout: Layout }: BaseLayoutProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeUiTheme}>
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

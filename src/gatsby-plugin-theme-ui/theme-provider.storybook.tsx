import { StoryFn } from '@storybook/addons';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'theme-ui';
import { themeUiTheme } from '.';

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const themeProviderDecorator = (story: StoryFn<ReactNode>) => {
  return <ThemeProvider theme={themeUiTheme}>{story()}</ThemeProvider>;
};

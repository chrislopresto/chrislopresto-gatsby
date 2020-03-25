import { StoryFn } from '@storybook/addons';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'theme-ui';
import { RootState } from '../state/root-reducer';

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  const { colorScheme } = useSelector((state: RootState) => state.colorScheme);
  const themeUiColorMode = colorScheme === 'dark' ? 'dark' : 'default';

  return <ThemeProvider theme={themeUiColorMode}>{children}</ThemeProvider>;
};

export const themeProviderDecorator = (story: StoryFn<ReactNode>) => {
  return <ThemeProviderWrapper>{story()}</ThemeProviderWrapper>;
};

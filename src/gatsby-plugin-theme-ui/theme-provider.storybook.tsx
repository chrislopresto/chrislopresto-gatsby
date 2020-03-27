import { select } from '@storybook/addon-knobs';
import { StoryFn } from '@storybook/addons';
import React, { ReactNode, useEffect } from 'react';
import { ThemeProvider, useColorMode } from 'theme-ui';
import { themeUiTheme } from '.';
import { BaseStyles } from '../components/base-styles';

interface ColorModeKnobWrapperProps {
  children: ReactNode;
}

const ColorModeKnobWrapper = ({ children }: ColorModeKnobWrapperProps) => {
  const [colorMode, setColorMode] = useColorMode();
  const colorModeKnobValue = select('Color Mode', ['default', 'dark'], colorMode);

  useEffect(() => {
    if (colorMode !== colorModeKnobValue) {
      setColorMode(colorModeKnobValue);
    }
  }, [colorMode, colorModeKnobValue, setColorMode]);

  return <>{children}</>;
};

export const themeProviderDecorator = (story: StoryFn<ReactNode>) => {
  return (
    <ThemeProvider theme={themeUiTheme}>
      <BaseStyles />
      <ColorModeKnobWrapper>{story()}</ColorModeKnobWrapper>
    </ThemeProvider>
  );
};

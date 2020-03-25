import React from 'react';
import { Box, BoxProps } from 'theme-ui';

interface MainProps extends BoxProps {
  children: React.ReactNode;
}

export const Main = ({ children, ...props }: MainProps) => (
  <Box as="main" {...props}>
    {children}
  </Box>
);

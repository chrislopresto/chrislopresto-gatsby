import React from 'react';
import { Box, BoxProps } from 'theme-ui';

interface HeaderProps extends BoxProps {
  children: React.ReactNode;
}

export const Header = ({ children, ...props }: HeaderProps) => (
  <Box as="header" {...props}>
    {children}
  </Box>
);

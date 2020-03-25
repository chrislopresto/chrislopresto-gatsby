import React from 'react';
import { Box, BoxProps } from 'theme-ui';

interface FooterProps extends BoxProps {
  children: React.ReactNode;
}

export const Footer = ({ children, ...props }: FooterProps) => (
  <Box as="footer" {...props}>
    {children}
  </Box>
);

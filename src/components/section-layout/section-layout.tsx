import React from 'react';
import { Box, BoxProps, SystemStyleObject } from 'theme-ui';

interface SectionLayoutProps extends BoxProps {
  children: React.ReactNode;
  contentSx?: SystemStyleObject;
}

// TODO: Derive 32 from spacing scale
const SECTION_LAYOUT_MAX_WIDTH = 1200 + 32;

export const SectionLayout = ({ children, contentSx, ...props }: SectionLayoutProps) => {
  return (
    <Box as="section" {...props}>
      <Box sx={{ maxWidth: `${SECTION_LAYOUT_MAX_WIDTH}px`, mx: 'auto', px: [4, 5], ...contentSx }}>{children}</Box>
    </Box>
  );
};

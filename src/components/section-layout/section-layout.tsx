import React from 'react';
import { Box, BoxProps } from 'theme-ui';

interface SectionLayoutProps extends BoxProps {
  children: React.ReactNode;
}

// TODO: Derive 32 from spacing scale
const SECTION_LAYOUT_MAX_WIDTH = 1200 + 32;

export const SectionLayout = ({ children, sx = {}, ...props }: SectionLayoutProps) => {
  // Lift out container sx props for background color
  const { background, bg, ...contentSx } = sx as any;

  return (
    <Box as="section" sx={{ background, bg }} {...props}>
      <Box sx={{ maxWidth: `${SECTION_LAYOUT_MAX_WIDTH}px`, mx: 'auto', px: [2, 3], ...contentSx }}>{children}</Box>
    </Box>
  );
};

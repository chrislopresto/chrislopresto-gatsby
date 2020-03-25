import React from 'react';
import { SectionLayout } from '.';
import { Box } from 'theme-ui';

export default { title: 'Section Layout' };

export const example = () => (
  <Box>
    <SectionLayout sx={{ background: 'cyan', border: 'dashed 1px magenta' }}>heyyyyyyyyyy</SectionLayout>
    <SectionLayout>heyyyyyyyyyy yo</SectionLayout>
  </Box>
);

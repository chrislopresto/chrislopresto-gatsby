/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import { SectionLayout } from '.';

export default { title: 'Layouts' };

export const section = () => (
  <Box>
    <SectionLayout sx={{ bg: 'accent' }}>I am content in a Section Layout</SectionLayout>
    <SectionLayout>I am content in a Section Layout</SectionLayout>
  </Box>
);

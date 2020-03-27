import React from 'react';
import { Box } from 'theme-ui';

export default () => (
  <Box
    as="iframe"
    title="Chris LoPresto Resume"
    sx={{ width: '100%', height: '100vh' }}
    // @ts-ignore
    src="../../chris-lopresto-resume.pdf"
  ></Box>
);

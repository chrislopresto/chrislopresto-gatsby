/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ChromelessLayout } from '../layouts/chromeless-layout';

export default () => (
  <ChromelessLayout>
    <iframe
      frameBorder={0}
      title="Chris LoPresto Resume"
      sx={{ width: '100%', height: '100vh' }}
      src="../../chris-lopresto-resume.pdf"
    />
  </ChromelessLayout>
);

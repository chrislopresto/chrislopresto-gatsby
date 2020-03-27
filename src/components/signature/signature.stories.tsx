/** @jsx jsx */
import { jsx } from 'theme-ui';
import { getHeight, getWidth, Signature } from '.';

export default { title: 'Signature' };

export const example = () => <Signature />;

const funkyBorder = { borderWidth: 2, borderColor: 'magenta', borderStyle: 'dashed' };
const constrainedHeightPx = 54;
export const constrainedHeight = () => (
  <Signature
    sx={{
      width: `${getWidth(constrainedHeightPx)}px`,
      height: `${constrainedHeightPx}px`,
      color: 'accent',
      ...funkyBorder
    }}
  />
);
const constrainedWidthPx = 154;
export const constrainedWidth = () => (
  <Signature
    sx={{
      height: `${getHeight(constrainedWidthPx)}px`,
      width: `${constrainedWidthPx}px`,
      color: 'accent',
      ...funkyBorder
    }}
  />
);
export const styled = () => <Signature sx={{ color: 'accent', p: 5, maxWidth: '300px' }} />;

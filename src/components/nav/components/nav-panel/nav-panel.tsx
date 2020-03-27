/** @jsx jsx */
import { Link } from '@reach/router';
import { IoMdClose } from 'react-icons/io';
import { Box, IconButton, jsx } from 'theme-ui';
import { ICON_SIZE, SIGNATURE_HEIGHT_PX, SIGNATURE_WIDTH_PX } from '../..';
import { Signature } from '../../../signature';

interface NavPanelProps {
  onDismiss: () => void;
}

export const NAV_PANEL_BACKGROUND_COLOR = 'background';
export const NAV_PANEL_VERTICAL_PADDING_INDEX = 3;

export const NavPanel = ({ onDismiss }: NavPanelProps) => {
  return (
    <Box sx={{ bg: NAV_PANEL_BACKGROUND_COLOR, py: NAV_PANEL_VERTICAL_PADDING_INDEX }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, color: 'accent' }}>
        <Signature
          sx={{
            height: `${SIGNATURE_HEIGHT_PX}px`,
            width: `${SIGNATURE_WIDTH_PX}px`,
            minWidth: `${SIGNATURE_WIDTH_PX}px`
          }}
        />
        <div>
          <IconButton
            onClick={onDismiss}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: 'text'
              },
              '&:focus': {
                color: 'text'
              }
            }}
          >
            <IoMdClose size={ICON_SIZE} />
          </IconButton>
        </div>
      </Box>
      <div sx={{ mb: 5, color: 'text' }}>
        <div>
          <Link
            sx={{
              '&:hover': {
                color: 'accent'
              },
              '&:focus': {
                color: 'accent'
              }
            }}
            to="/"
          >
            <h2 sx={{ mb: 5 }}>Home</h2>
          </Link>
          <Link
            sx={{
              '&:hover': {
                color: 'accent'
              },
              '&:focus': {
                color: 'accent'
              }
            }}
            to="/about"
          >
            <h2 sx={{ mb: 5 }}>About</h2>
          </Link>
          <Link
            sx={{
              '&:hover': {
                color: 'accent'
              },
              '&:focus': {
                color: 'accent'
              }
            }}
            to="/thoughts"
          >
            <h2 sx={{ mb: 5 }}>Thoughts</h2>
          </Link>
        </div>
      </div>
    </Box>
  );
};

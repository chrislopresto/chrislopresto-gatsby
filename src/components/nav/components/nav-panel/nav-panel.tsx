/** @jsx jsx */
import { Link } from 'gatsby';
import { IoMdClose } from 'react-icons/io';
import { Box, IconButton, jsx, Text } from 'theme-ui';
import { ICON_SIZE, SIGNATURE_HEIGHT_PX, SIGNATURE_WIDTH_PX } from '../..';
import { Signature } from '../../../signature';
import { useActiveLinkStyle } from '../../../../utilities';

interface NavPanelProps {
  onDismiss: () => void;
}

export const NAV_PANEL_BACKGROUND_COLOR = 'background';
export const NAV_PANEL_VERTICAL_PADDING_INDEX = 3;

export const NavPanel = ({ onDismiss }: NavPanelProps) => {
  const activeLinkStyle = useActiveLinkStyle();
  return (
    <Box sx={{ bg: NAV_PANEL_BACKGROUND_COLOR, py: NAV_PANEL_VERTICAL_PADDING_INDEX }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6, color: 'accent' }}>
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
      <div>
        <Link {...activeLinkStyle} partiallyActive={false} to="/">
          <Text variant="subtitle" sx={{ mb: 6 }}>
            Home
          </Text>
        </Link>
        <Link {...activeLinkStyle} to="/about">
          <Text variant="subtitle" sx={{ mb: 6 }}>
            About
          </Text>
        </Link>
        <Link {...activeLinkStyle} to="/thoughts">
          <Text variant="subtitle" sx={{ mb: 6 }}>
            Thoughts
          </Text>
        </Link>
      </div>
    </Box>
  );
};

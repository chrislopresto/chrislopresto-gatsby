import { Link } from '@reach/router';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Box, IconButton } from 'theme-ui';
import { Signature } from '../../../signature';
import { SIGNATURE_HEIGHT_PX, SIGNATURE_WIDTH_PX, ICON_SIZE } from '../..';

interface NavPanelProps {
  onDismiss: () => void;
}

export const NAV_PANEL_BACKGROUND_COLOR = 'secondary';

export const NavPanel = ({ onDismiss }: NavPanelProps) => {
  return (
    <Box sx={{ bg: NAV_PANEL_BACKGROUND_COLOR }} className="py-2">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Signature
          className="text-accent hover:text-primary"
          style={{
            height: `${SIGNATURE_HEIGHT_PX}px`,
            width: `${SIGNATURE_WIDTH_PX}px`,
            minWidth: `${SIGNATURE_WIDTH_PX}px`
          }}
        />
        <div className="text-accent">
          <IconButton onClick={onDismiss} sx={{ cursor: 'pointer' }}>
            <IoMdClose size={ICON_SIZE} />
          </IconButton>
        </div>
      </Box>
      <div className="mb-4">
        <div>
          <Link to="/">
            <h2 className="mb-4">Home</h2>
          </Link>
          <Link to="/about">
            <h2 className="mb-4">About</h2>
          </Link>
          <Link to="/thoughts">
            <h2 className="mb-4">Thoughts</h2>
          </Link>
        </div>
      </div>
    </Box>
  );
};

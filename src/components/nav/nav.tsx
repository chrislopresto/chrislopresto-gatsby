/** @jsx jsx */
import { Dialog } from '@reach/dialog';
import { Link } from 'gatsby';
import React, { Fragment as _, useCallback } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { Box, Flex, IconButton, jsx, Text, useColorMode } from 'theme-ui';
import { useActiveLinkStyle } from '../../utilities';
import { SectionLayout } from '../section-layout';
import { getWidth, Signature } from '../signature';
import { NavPanel, NAV_PANEL_BACKGROUND_COLOR, NAV_PANEL_VERTICAL_PADDING_INDEX } from './components';

export const SIGNATURE_HEIGHT_PX = 48;
export const SIGNATURE_WIDTH_PX = getWidth(SIGNATURE_HEIGHT_PX);
export const ICON_SIZE = 24;

export const Nav = () => {
  const [colorMode, setColorMode] = useColorMode();
  const activeLinkStyle = useActiveLinkStyle();
  const toggleColorMode = useCallback(() => {
    const themeUiColorMode = colorMode === 'dark' ? 'default' : 'dark';
    setColorMode(themeUiColorMode);
  }, [colorMode, setColorMode]);
  const [showNavPanel, setShowNavPanel] = React.useState(false);
  const openNavPanel = useCallback(() => setShowNavPanel(true), []);
  const closeNavPanel = useCallback(() => setShowNavPanel(false), []);

  return (
    <_>
      <nav
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mx: -4,
          py: NAV_PANEL_VERTICAL_PADDING_INDEX,
          color: 'accent'
        }}
      >
        <div sx={{ px: 4 }}>
          <Box
            as="span"
            sx={{
              cursor: 'pointer',
              flexBasis: `${SIGNATURE_WIDTH_PX}px`,
              '&:hover': {
                color: 'text'
              },
              '&:focus': {
                color: 'text'
              }
            }}
            onClick={toggleColorMode}
            tabIndex={0}
          >
            <Signature
              sx={{
                height: `${SIGNATURE_HEIGHT_PX}px`,
                width: `${SIGNATURE_WIDTH_PX}px`,
                minWidth: `${SIGNATURE_WIDTH_PX}px`
              }}
            />
          </Box>
        </div>
        <Box sx={{ px: 4, flexGrow: 1, display: ['none', 'block'] }}>
          <Flex sx={{ mx: -5 }}>
            <Link {...activeLinkStyle} partiallyActive={false} to="/">
              <Text variant="text.subtitle" sx={{ px: 5, fontSize: 2, letterSpacing: 1 }}>
                Home
              </Text>
            </Link>
            <Link {...activeLinkStyle} to="/about">
              <Text variant="text.subtitle" sx={{ px: 5, fontSize: 2, letterSpacing: 1 }}>
                About
              </Text>
            </Link>
            <Link {...activeLinkStyle} to="/thoughts">
              <Text variant="text.subtitle" sx={{ px: 5, fontSize: 2, letterSpacing: 1 }}>
                Thoughts
              </Text>
            </Link>
          </Flex>
        </Box>
        <div sx={{ px: 4 }}>
          <IconButton
            onClick={openNavPanel}
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
            <IoMdMenu size={ICON_SIZE} />
          </IconButton>
        </div>
      </nav>
      {showNavPanel && (
        <Dialog
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          onDismiss={closeNavPanel}
        >
          <SectionLayout sx={{ bg: NAV_PANEL_BACKGROUND_COLOR, height: '100vh' }}>
            <NavPanel onDismiss={closeNavPanel} />
          </SectionLayout>
        </Dialog>
      )}
    </_>
  );
};

import { Dialog } from '@reach/dialog';
import { Link } from '@reach/router';
import React, { useCallback, useEffect } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, useColorMode } from 'theme-ui';
import { toggleColorScheme } from '../../state/color-scheme';
import { RootState } from '../../state/root-reducer';
import { SectionLayout } from '../section-layout';
import { getWidth, Signature } from '../signature';
import { NavPanel, NAV_PANEL_BACKGROUND_COLOR } from './components';

export const SIGNATURE_HEIGHT_PX = 48;
export const SIGNATURE_WIDTH_PX = getWidth(SIGNATURE_HEIGHT_PX);
export const ICON_SIZE = 24;

export const Nav = () => {
  const dispatch = useDispatch();
  const [, setColorMode] = useColorMode();
  const { colorScheme } = useSelector((state: RootState) => state.colorScheme);
  useEffect(() => {
    const themeUiColorMode = colorScheme === 'dark' ? 'dark' : 'default';
    setColorMode(themeUiColorMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const invokeToggleColorScheme = useCallback(() => {
    dispatch(toggleColorScheme());
    const themeUiColorMode = colorScheme === 'dark' ? 'default' : 'dark';
    setColorMode(themeUiColorMode);
  }, [colorScheme, dispatch, setColorMode]);
  const [showNavPanel, setShowNavPanel] = React.useState(false);
  const openNavPanel = useCallback(() => setShowNavPanel(true), []);
  const closeNavPanel = useCallback(() => setShowNavPanel(false), []);

  return (
    <>
      <nav className="text-accent flex justify-between items-center -mx-4 py-2">
        <div className="px-4 relative">
          <Box
            as="span"
            sx={{ cursor: 'pointer', flexBasis: `${SIGNATURE_WIDTH_PX}px` }}
            onClick={invokeToggleColorScheme}
            tabIndex={0}
          >
            <Signature
              className="text-accent hover:text-primary"
              style={{
                height: `${SIGNATURE_HEIGHT_PX}px`,
                width: `${SIGNATURE_WIDTH_PX}px`,
                minWidth: `${SIGNATURE_WIDTH_PX}px`
              }}
            />
          </Box>
        </div>
        <Box className="px-4 flex-grow" sx={{ display: ['none', 'block'] }}>
          <div className="flex -mx-4">
            <Link to="/">
              <h2 className="px-4 text-sm">Home</h2>
            </Link>
            <Link to="/about">
              <h2 className="px-4 text-sm">About</h2>
            </Link>
            <Link to="/thoughts">
              <h2 className="px-4 text-sm">Thoughts</h2>
            </Link>
          </div>
        </Box>
        <div className="px-4">
          <IconButton onClick={openNavPanel} sx={{ cursor: 'pointer' }}>
            <IoMdMenu size={ICON_SIZE} />
          </IconButton>
        </div>
      </nav>
      {showNavPanel && (
        <Box
          as={Dialog}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          // @ts-ignore Box generic typings not working
          onDismiss={closeNavPanel}
        >
          <SectionLayout sx={{ bg: NAV_PANEL_BACKGROUND_COLOR, height: '100vh' }}>
            <NavPanel onDismiss={closeNavPanel} />
          </SectionLayout>
        </Box>
      )}
    </>
  );
};

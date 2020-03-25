import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withFonts } from 'react-with-async-fonts';
import { markHeroFontLoaded } from '../../state/font-loading';

interface FontLoadProps {
  fonts?: {
    hero: boolean;
  };
}

const FontLoad = ({ fonts }: FontLoadProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (fonts?.hero) {
      dispatch(markHeroFontLoaded());
    }
  }, [dispatch, fonts]);

  return null;
};

export const FontLoadDispatch = withFonts(FontLoad);

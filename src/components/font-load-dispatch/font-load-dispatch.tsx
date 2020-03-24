import { useEffect, useDebugValue } from 'react';
import { useDispatch } from 'react-redux';
import { withFonts } from 'react-with-async-fonts';
import { markHeroFontLoaded } from '../../state/font-observer';

interface FontLoadProps {
  fonts?: {
    hero: boolean;
  };
}

const FontLoad = ({ fonts }: FontLoadProps) => {
  const dispatch = useDispatch();
  useDebugValue('yo');
  console.log('clop > yoooooooooooooooooooo');

  useEffect(() => {
    if (fonts?.hero) {
      dispatch(markHeroFontLoaded());
    }
  }, [dispatch, fonts]);

  return null;
};

export const FontLoadDispatch = withFonts(FontLoad);

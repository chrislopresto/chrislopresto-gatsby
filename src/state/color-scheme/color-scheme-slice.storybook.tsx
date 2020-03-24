import { select } from '@storybook/addon-knobs';
import { StoryFn } from '@storybook/addons';
import React, { ReactNode, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../root-reducer';
import { toggleColorScheme } from '.';
import { Helmet } from 'react-helmet';

interface ColorSchemeKnobWrapperProps {
  children: ReactNode;
}

const ColorSchemeKnobWrapper = ({ children }: ColorSchemeKnobWrapperProps) => {
  const { colorScheme } = useSelector((state: RootState) => state.colorScheme);
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);

  const colorSchemeKnob = select('Color Scheme', ['light', 'dark'], colorScheme);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(toggleColorScheme());
  }, [dispatch, colorSchemeKnob, isFirstRender]);

  return (
    <>
      <Helmet bodyAttributes={{ class: `color-scheme-${colorScheme} bg-${colorScheme}-alt` }} />
      {children}
    </>
  );
};

export const colorSchemeSliceDecorator = (storyFn: StoryFn<ReactNode>) => (
  <ColorSchemeKnobWrapper>{storyFn()}</ColorSchemeKnobWrapper>
);

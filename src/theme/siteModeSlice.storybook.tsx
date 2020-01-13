import { select } from '@storybook/addon-knobs';
import { StoryFn } from '@storybook/addons';
import React, { ReactNode, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../rootReducer';
import { toggleMode } from './siteModeSlice';
import { Helmet } from 'react-helmet';

interface SiteModeKnobWrapperProps {
  children: ReactNode;
}

const SiteModeKnobWrapper = ({ children }: SiteModeKnobWrapperProps) => {
  const { mode } = useSelector((state: RootState) => state.siteMode);
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);

  const siteModeKnob = select('Site Mode', ['light', 'dark'], mode);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(toggleMode());
  }, [dispatch, siteModeKnob, isFirstRender]);

  return (
    <>
      <Helmet bodyAttributes={{ class: `mode-${mode} bg-${mode}-alt` }} />
      {children}
    </>
  );
};

export const siteModeSliceDecorator = (storyFn: StoryFn<ReactNode>) => (
  <SiteModeKnobWrapper>{storyFn()}</SiteModeKnobWrapper>
);

import React, { useCallback } from 'react';
import { FontSubscriber } from 'react-with-async-fonts';
import { useDispatch } from 'react-redux';
import { toggleMode } from '../theme/siteModeSlice';

interface Props {
  className?: string;
}

export const Hero = ({ className }: Props) => {
  const dispatch = useDispatch();
  const toggleSiteMode = useCallback(() => dispatch(toggleMode()), [dispatch]);

  return (
    <FontSubscriber>
      {() => (
        <h1 className="Hero text-accent mb-4" onClick={toggleSiteMode}>
          Chris L<span className="text-6xl">o</span>Presto
        </h1>
      )}
    </FontSubscriber>
  );
};

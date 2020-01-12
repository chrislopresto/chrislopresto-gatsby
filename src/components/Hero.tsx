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
  const headerClassName = `Hero text-accent mb-4 ${className}`;

  return (
    <FontSubscriber>
      {() => (
        <h1 className={headerClassName} onClick={toggleSiteMode}>
          Chris L<span className="text-6xl">o</span>Presto
        </h1>
      )}
    </FontSubscriber>
  );
};

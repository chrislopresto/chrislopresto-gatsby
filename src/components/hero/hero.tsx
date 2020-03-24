import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleColorScheme } from '../../state/color-scheme';
import { RootState } from '../../state/root-reducer';

interface Props {
  className?: string;
}

export const Hero = ({ className }: Props) => {
  const dispatch = useDispatch();
  const invokeToggleColorScheme = useCallback(() => dispatch(toggleColorScheme()), [dispatch]);
  const { heroFontLoaded } = useSelector((state: RootState) => state.fontObserver);
  const heroFontClassName = heroFontLoaded ? 'font-hero' : 'font-hero-fallback';
  const headerClassName = `text-hero-treatment ${heroFontClassName} text-accent mb-4 ${className}`;

  return (
    <h1 className={headerClassName} onClick={invokeToggleColorScheme}>
      Chris L<span className="text-6xl">o</span>Presto
    </h1>
  );
};

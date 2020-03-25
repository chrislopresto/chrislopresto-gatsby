import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/root-reducer';

interface Props {
  className?: string;
}

export const Hero = ({ className }: Props) => {
  const { heroFontLoaded } = useSelector((state: RootState) => state.fontObserver);
  const heroFontClassName = heroFontLoaded ? 'font-hero' : 'font-hero-fallback';
  const headerClassName = `text-hero-treatment ${heroFontClassName} text-accent ${className}`;

  return (
    <h1 className={headerClassName}>
      Chris L<span className="text-5xl">o</span>Presto
    </h1>
  );
};

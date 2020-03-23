import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FontSubscriber } from 'react-with-async-fonts';
import { toggleMode } from '../theme/siteModeSlice';

interface Props {
  className?: string;
}

export const Hero = ({ className }: Props) => {
  const dispatch = useDispatch();
  const toggleSiteMode = useCallback(() => dispatch(toggleMode()), [dispatch]);

  return (
    <FontSubscriber>
      {fonts => {
        const heroFontClassName = fonts.hero ? 'font-hero' : 'font-hero-fallback';
        const headerClassName = `text-hero-treatment ${heroFontClassName} text-accent mb-4 ${className}`;
        return (
          <h1 className={headerClassName} onClick={toggleSiteMode}>
            Chris L<span className="text-6xl">o</span>Presto
          </h1>
        );
      }}
    </FontSubscriber>
  );
};

import React, { useCallback } from 'react';
import { FontSubscriber } from 'react-with-async-fonts';
import { useSiteModeDispatch } from '../theme/SiteModeContext';

interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  const dispatch = useSiteModeDispatch();
  const toggleMode = useCallback(() => dispatch({ type: 'toggleMode' }), [dispatch]);

  return (
    <FontSubscriber>
      {() => (
        <h1 className="Hero text-accent mb-4" onClick={toggleMode}>
          Chris L<span className="text-6xl">o</span>Presto
        </h1>
      )}
    </FontSubscriber>
  );
};

export default Hero;

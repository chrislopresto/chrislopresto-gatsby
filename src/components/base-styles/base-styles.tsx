import React from 'react';
import { Global } from '@emotion/core';

import '../../styles/reset.css';
import '../../styles/fonts.css';

export const BaseStyles = () => {
  return (
    <Global
      styles={theme => ({
        '*': {
          boxSizing: 'border-box'
        }
      })}
    />
  );
};

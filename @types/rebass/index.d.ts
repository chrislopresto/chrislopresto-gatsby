import * as React from 'react';

declare module 'rebass' {
  export interface BaseProps<C> extends React.Props<C> {
    as?: string;
  }
}

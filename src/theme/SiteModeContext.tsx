import * as React from 'react';

export interface SiteMode {
  theme: 'light' | 'dark';
  setTheme: () => void;
}

const context = React.createContext<SiteMode | null>(null);

export const SiteModeContextProvider = context.Provider;

export const SiteModeContextConsumer = context.Consumer;

type Omit<Thing, KeyToOmit extends keyof Thing> = Pick<Thing, Exclude<keyof Thing, KeyToOmit>>;

export function withSiteModeContext<
  With extends { siteModeContext?: SiteMode },
  Without = Omit<With, 'siteModeContext'>
>(Component: React.ComponentClass<With> | React.StatelessComponent<With>): React.SFC<Without> {
  return function BoundComponent(props: Without) {
    return (
      <SiteModeContextConsumer>{value => <Component {...props} siteModeContext={value} />}</SiteModeContextConsumer>
    );
  };
}

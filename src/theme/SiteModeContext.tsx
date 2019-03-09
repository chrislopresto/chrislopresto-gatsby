import * as React from 'react';
import { createContext, useContext, useReducer, Dispatch } from 'react';
import { reducer, State, Action, Mode } from './site-mode-reducer';

interface ProviderProps {
  mode: Mode;
}

type ContextValue = [State, Dispatch<Action>];

const SiteModeContext = createContext<ContextValue>({} as ContextValue);

export const SiteModeProvider: React.FC<ProviderProps> = ({ mode, children }) => {
  const reducerHook = useReducer(reducer, { mode });
  return <SiteModeContext.Provider value={reducerHook}>{children}</SiteModeContext.Provider>;
};

export const useSiteMode = () => useContext(SiteModeContext);

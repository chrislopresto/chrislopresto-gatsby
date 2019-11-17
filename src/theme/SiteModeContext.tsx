import React from 'react';
import { createContext, useContext, useReducer, Dispatch } from 'react';
import { reducer, State, Action, Mode } from './site-mode-reducer';

interface ProviderProps {
  mode: Mode;
}

type ContextValue = [State, Dispatch<Action>];

const SiteModeContext = createContext<State | undefined>(undefined);
const SiteModeDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

export const SiteModeProvider: React.FC<ProviderProps> = ({ mode, children }) => {
  const [state, dispatch] = useReducer(reducer, { mode });
  return (
    <SiteModeContext.Provider value={state}>
      <SiteModeDispatchContext.Provider value={dispatch}>{children}</SiteModeDispatchContext.Provider>
    </SiteModeContext.Provider>
  );
};

export const useSiteModeState = () => {
  const context = useContext(SiteModeContext);
  if (context === undefined) {
    throw new Error('useSiteModeState must be used within a SiteModeProvider');
  }
  return context;
};

export const useSiteModeDispatch = () => {
  const context = useContext(SiteModeDispatchContext);
  if (context === undefined) {
    throw new Error('useSiteModeDispatch must be used within a SiteModeProvider');
  }
  return context;
};

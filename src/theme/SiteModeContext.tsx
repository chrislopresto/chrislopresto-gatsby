import * as React from 'react';
import { createContext, useContext, useReducer, FunctionComponent, Reducer, Dispatch } from 'react';
import produce from 'immer';
import { themes } from '../theme/theme';

type Mode = keyof typeof themes;

interface State {
  mode: Mode;
}

interface Action {
  type: 'toggleMode';
}

interface ProviderProps {
  mode: Mode;
}

type ContextValue = [State, Dispatch<Action>];

const SiteModeContext = createContext<ContextValue>({} as ContextValue);

const reducer: Reducer<State, Action> = (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'toggleMode':
        draft.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  });

export const SiteModeProvider: FunctionComponent<ProviderProps> = ({ mode, children }) => (
  <SiteModeContext.Provider value={useReducer(reducer, { mode })}>{children}</SiteModeContext.Provider>
);

export const useSiteMode = () => useContext(SiteModeContext);

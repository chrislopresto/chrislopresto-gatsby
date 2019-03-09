import * as React from 'react';
import { createContext, useContext, useReducer, FunctionComponent, Reducer, Dispatch } from 'react';

export type Mode = 'light' | 'dark';

interface State {
  mode: Mode;
}

export const SiteModeContext = createContext<[State, Dispatch<Action>]>({} as [State, Dispatch<Action>]);

interface Action {
  type: 'toggleMode';
}

interface SiteModeProviderProps {
  initialState: State;
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'toggleMode':
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light'
      };

    default:
      return state;
  }
};

export const SiteModeProvider: FunctionComponent<SiteModeProviderProps> = ({ initialState, children }) => (
  <SiteModeContext.Provider value={useReducer(reducer, initialState)}>{children}</SiteModeContext.Provider>
);

export const useSiteMode = () => useContext(SiteModeContext);

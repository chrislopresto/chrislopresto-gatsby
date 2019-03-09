import * as React from 'react';
import { createContext, useContext, useReducer, FunctionComponent, Reducer, Dispatch } from 'react';
import produce from 'immer';

export type Mode = 'light' | 'dark';

interface State {
  mode: Mode;
}

interface Action {
  type: 'toggleMode';
}

interface ProviderProps {
  initialState: State;
}

export const SiteModeContext = createContext<[State, Dispatch<Action>]>({} as [State, Dispatch<Action>]);

const reducer: Reducer<State, Action> = (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'toggleMode':
        draft.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  });

export const SiteModeProvider: FunctionComponent<ProviderProps> = ({ initialState, children }) => (
  <SiteModeContext.Provider value={useReducer(reducer, initialState)}>{children}</SiteModeContext.Provider>
);

export const useSiteMode = () => useContext(SiteModeContext);

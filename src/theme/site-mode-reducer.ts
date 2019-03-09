import { Reducer } from 'react';
import produce from 'immer';
import { themes } from '../theme/theme';

export type Mode = keyof typeof themes;

export interface State {
  mode: Mode;
}

export interface Action {
  type: 'toggleMode';
}

export const reducer: Reducer<State, Action> = (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'toggleMode':
        draft.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  });

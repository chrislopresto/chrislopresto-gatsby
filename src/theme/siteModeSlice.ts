import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../theme/theme';

export type Mode = keyof typeof themes;

interface SiteModeState {
  mode: Mode;
}

let initialState: SiteModeState = {
  mode: 'dark'
};

const siteModeSlice = createSlice({
  name: 'siteMode',
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  }
});

export const { toggleMode } = siteModeSlice.actions;

export const siteModeReducer = siteModeSlice.reducer;

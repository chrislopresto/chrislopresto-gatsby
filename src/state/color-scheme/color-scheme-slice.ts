import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../styles/theme';

export type ColorScheme = keyof typeof themes;

interface ColorSchemeState {
  colorScheme: ColorScheme;
}

let initialState: ColorSchemeState = {
  colorScheme: 'dark'
};

const colorSchemeSlice = createSlice({
  name: 'colorScheme',
  initialState,
  reducers: {
    toggleColorScheme(state) {
      state.colorScheme = state.colorScheme === 'light' ? 'dark' : 'light';
    }
  }
});

export const { toggleColorScheme } = colorSchemeSlice.actions;

export const colorSchemeReducer = colorSchemeSlice.reducer;

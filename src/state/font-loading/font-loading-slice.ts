import { createSlice } from '@reduxjs/toolkit';

interface FontLoadingState {
  heroFontLoaded: boolean;
}

const initialState: FontLoadingState = {
  heroFontLoaded: false
};

const fontLoadingSlice = createSlice({
  name: 'fontLoading',
  initialState,
  reducers: {
    markHeroFontLoaded(state) {
      state.heroFontLoaded = true;
    }
  }
});

export const { markHeroFontLoaded } = fontLoadingSlice.actions;

export const fontLoadingReducer = fontLoadingSlice.reducer;

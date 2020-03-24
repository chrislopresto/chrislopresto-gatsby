import { createSlice } from '@reduxjs/toolkit';

interface FontObserverState {
  heroFontLoaded: boolean;
}

const initialState: FontObserverState = {
  heroFontLoaded: false
};

const fontObserverSlice = createSlice({
  name: 'fontObserver',
  initialState,
  reducers: {
    markHeroFontLoaded(state) {
      state.heroFontLoaded = true;
    }
  }
});

export const { markHeroFontLoaded } = fontObserverSlice.actions;

export const fontObserverReducer = fontObserverSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
  mode: boolean;
}

const initialState: DarkModeState = {
  mode: false,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const darkModeReducer = darkModeSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { countriesReducer } from './features/countries.slice';
import { darkModeReducer } from './features/darkMode.slice';

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

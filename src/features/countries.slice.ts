import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCountries } from '~/api/countries';

interface CountriesState {
  countries: [] | null;
  countryType: any | null;
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
  error: string | null;
}

const initialState: CountriesState = {
  countries: null,
  countryType: null,
  status: 'idle',
  error: null,
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const countries = await getAllCountries();
  const countryType = typeof countries;
  return { countries, countryType };
});

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload.countries;
        state.countryType = action.payload.countryType;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      });
  },
});

// export const {} = countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;

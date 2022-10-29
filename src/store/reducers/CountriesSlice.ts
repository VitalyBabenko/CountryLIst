import {ICountry} from '../../types/ICountry'
import { fetchCountries } from './ActionCreators';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CountriesState {
   countries: ICountry[];
   isLoading: boolean;
   error: string;
}
   
const initialState: CountriesState = {
   countries: [],
   isLoading: false,
   error: ''
}

export const countriesSlice = createSlice({
   name: 'countries',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchCountries.fulfilled.type]:(state, action: PayloadAction<ICountry[]>) => {
         state.isLoading = false;
         state.error = '';
         state.countries = action.payload;
      },

      [fetchCountries.pending.type]:(state) => {
         state.isLoading = true;
      },

      [fetchCountries.rejected.type]:(state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      }
   }
})

export default countriesSlice.reducer;
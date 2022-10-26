import {ICountry} from '../../types/ICountry'
import { fetchCountry, fetchNeighbors } from './ActionCreators';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CountryState {
   country: any;
   isLoading: boolean;
   error: string;
   neighbors: ICountry[];
}

const initialState:CountryState = {
   country: {},
   isLoading: true,
   error: '',
   neighbors: [],
}

export const countrySlice = createSlice({
   name: 'country',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchCountry.fulfilled.type]:(state, action: PayloadAction<ICountry>) => {
         state.country = action.payload;
         state.isLoading = false;
         state.error = '';
      },

      [fetchCountry.pending.type]:(state) => {
         state.isLoading = true;
      },

      [fetchCountry.rejected.type]:(state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      },

      [fetchNeighbors.fulfilled.type]:(state,action: PayloadAction<ICountry[]>) => {
         state.neighbors = action.payload;
      }
   }
})

export default countrySlice.reducer
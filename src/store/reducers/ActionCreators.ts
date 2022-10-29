import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { ICountry } from '../../types/ICountry'

const appAxios = axios.create({
   baseURL: `https://restcountries.com/v3.1/`,
   method: 'GET'
})

export const fetchCountries = createAsyncThunk(
   'countries/fetchAll',

   async (region:string | undefined = 'all', thunkAPI) => {
      try {
         if (region === 'all') {
            const { data } = await appAxios<ICountry[]>(`all?fields=name,flags,population,region,capital`);
            return data
         } else {
            const { data } = await appAxios<ICountry[]>(`subregion/${region}?fields=name,flags,population,region,capital`);
            return data
         } 
      } catch(e) {
         return thunkAPI.rejectWithValue('error')
      }
   }
)

export const fetchCountry = createAsyncThunk(
   'country/fetch',

   async (name:string | undefined, thunkAPI) => {
      try {
         const { data } = await appAxios<ICountry[]>(`name/${name}?&fields=name,flags,population,region,subregion,capital,area,startofweek,languages,borders`)
         return data[0]
      } catch(e) {
         return thunkAPI.rejectWithValue('error')
      }
   }
)

export const fetchNeighbors = createAsyncThunk(
   'neighbors/fetch',

   async (codes: [string], thunkAPI ) => {
      try {
         const { data } = await appAxios<ICountry[]>(`alpha?codes=${codes.join(',')}&fields=name`)     
         return data
      } catch(e) {
         return thunkAPI.rejectWithValue('error')
      }
   }
)



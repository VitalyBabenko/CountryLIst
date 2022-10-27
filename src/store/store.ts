import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countriesReducer from './reducers/CountriesSlice';
import countryReducer from './reducers/CountrySlice'


const rootReducer = combineReducers({
   countriesReducer,
   countryReducer
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countriesReducer from './reducers/CountriesSlice';
import countryReducer from './reducers/CountrySlice'
import darkModeReducer from './reducers/DarkModeSlice'


const rootReducer = combineReducers({
   countriesReducer,
   countryReducer,
   darkModeReducer
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
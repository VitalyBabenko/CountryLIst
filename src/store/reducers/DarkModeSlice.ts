import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface DarkModeState {
   darkMode: boolean;
}

const initialState:DarkModeState = {
   darkMode: false
}

export const darkModeSlice = createSlice({
   name: 'darkMode',
   initialState,
   reducers: {
      toggleThemeMode(state,action: PayloadAction<boolean>) {
         state.darkMode = action.payload
      }
   }
})

export default darkModeSlice.reducer


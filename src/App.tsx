import { useEffect } from "react";
import { Routes,Route } from 'react-router-dom'

import {useAppSelector, useAppDispatch} from './hooks/redux'
import { fetchCountries } from './store/reducers/ActionCreators'

import Header from "./components/Header"
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'



function App() {
  const dispatch = useAppDispatch()
  const {darkMode} = useAppSelector(state => state.darkModeReducer)

  useEffect(() => {
    dispatch(fetchCountries())
    // eslint-disable-next-line
  },[])

  return (
    <div className={darkMode ? 'app-dark' : 'app'}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<CountryPage />} />  
      </Routes>
    </div>
  )
}

export default App;

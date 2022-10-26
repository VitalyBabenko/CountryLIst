import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux';

import '../scss/countryCard.scss'
import { ICountry } from '../types/ICountry'
import CountryInfo from './CounrtryInfo'


interface CountryCardPorps {
   country: ICountry;
}


const CountryCard: FC<CountryCardPorps> = ({ country }) => {
   const { darkMode } = useAppSelector(state => state.darkModeReducer)

  return (
     <NavLink
        to={`/country/${country.name.common}`}
        className={darkMode ? 'country-card-dark' : 'country-card'} >
        <img src={country.flags.png} alt="" />
        <h3>{`${country.name.common}`}</h3>
        <CountryInfo
           population={country.population}
           region={country.region}
           capital={country.capital}
        />
    </NavLink>
  )
}

export default CountryCard
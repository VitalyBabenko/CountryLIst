import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import '../scss/countryCard.scss'
import { ICountry } from '../types/ICountry'
import CountryInfo from './CounrtryInfo'

interface CountryCardPorps {
   country: ICountry;
}

const CountryCard: FC<CountryCardPorps> = ({ country }) => {
  return (
     <NavLink
        to={`/country/${country.name.common}`}
        className='country-card'>
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
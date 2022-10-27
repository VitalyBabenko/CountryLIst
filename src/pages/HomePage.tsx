import { useAppSelector } from "../hooks/redux"

import Filters from '../components/Filters'
import CountryCard from "../components/CountryCard"
import Pagintaion from '../components/Pagination'

const HomePage = () => {
  const { filtredCountries, isLoading } = useAppSelector(state => state.countriesReducer)
  

  return (
    <ul>
      <Filters/>
      {isLoading
        ?
        <h1>Loading</h1>
        : 
        <>
          {filtredCountries.map(country =>
            <CountryCard key={country.name.common} country={country} />
          )}

          <Pagintaion />
        </>
      }
    </ul>
  )
}

export default HomePage
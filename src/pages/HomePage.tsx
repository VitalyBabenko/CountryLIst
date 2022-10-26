import { useAppSelector } from "../hooks/redux"
import Filters from '../components/Filters'
import CountryCard from "../components/CountryCard"

const HomePage = () => {
  const { countries } = useAppSelector(state => state.countriesReducer)

  return (
    <ul>
      <Filters/>
      {countries.map(country =>
        <CountryCard key={country.name.common} country={country} />
      )}
    </ul>
     
  )
}

export default HomePage
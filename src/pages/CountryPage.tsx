import { FC, useEffect } from 'react'
import { MdArrowBack } from 'react-icons/md'
import { useParams,useNavigate } from 'react-router-dom'
import CounrtryInfo from '../components/CounrtryInfo'
import CountryBorders from '../components/CountryBorders'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import '../scss/countryPage.scss'
import { fetchCountry } from '../store/reducers/ActionCreators'



const CountryPage: FC = ( ) => {
  const dispatch = useAppDispatch()
  const { country, isLoading, error } = useAppSelector(state => state.countryReducer)
  const navigate = useNavigate()
  const { name } =  useParams()

  useEffect(() => {
    dispatch(fetchCountry(name))
    // eslint-disable-next-line
  },[name])


  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div className='country-page' >
      <button onClick={() => navigate(-1)} ><MdArrowBack />Back</button>
      <img src={country.flags.svg} alt="country-flag" />
      <h2>{country.name.common}</h2>
      <CounrtryInfo 
        officialName={country.name.official}
        population={country.population}
        region={country.region}
        subregion={country.subregion}
      />
      <CounrtryInfo 
        capital={country.capital}
        area={country.area}
        startOfWeek={country.startOfWeek}
        languages={country.languages}
      />
      <CountryBorders borders={country.borders} />
    </div>
  )
}

export default CountryPage
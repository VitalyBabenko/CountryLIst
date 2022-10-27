import { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { countriesSlice } from '../store/reducers/CountriesSlice'


const Pagination: FC = () => {
   const dispatch = useAppDispatch();
   const { countries, filtredCountries } = useAppSelector(state => state.countriesReducer)
   const { paginate } = countriesSlice.actions

   const [currentPage] = useState(1)
   const [countriesPerPage] = useState(12)

   const lastCountryIndex = currentPage * countriesPerPage;
   const firstCountryIndex = lastCountryIndex - countriesPerPage;
   const currentCountries = filtredCountries.slice(firstCountryIndex, lastCountryIndex)
   
   const pageNumbers = []

   for (let i = 0; i < Math.ceil(countries.length / countriesPerPage);i++) {
      pageNumbers.push(i)
   }

   const handlePaginate = () => {
      dispatch(paginate(currentCountries))
   }
   
  return (
     <ul>
        {pageNumbers.map(number => 
           <li
              onClick={handlePaginate}
              key={number}
           >{number}</li>
         )}
    </ul>
  )
}

export default Pagination
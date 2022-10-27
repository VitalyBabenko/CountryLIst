import { FC, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchNeighbors } from '../store/reducers/ActionCreators'
import '../scss/countryBorders.scss'
interface CountryBordersProps {
   borders: [string];
}

const CountryBorders: FC<CountryBordersProps> = ({ borders }) => {
   const dispatch = useAppDispatch()
   const { neighbors } = useAppSelector(state => state.countryReducer)

   useEffect(() => {
     dispatch(fetchNeighbors(borders)) 
     // eslint-disable-next-line
   },[borders])

  return (
    <div className='country-borders'>
     <p>Border countries:</p> 
        {neighbors.map(neighbor => 
           <NavLink
               to={`/country/${neighbor.name.common}`}
              key={neighbor.name.common} >
              {neighbor.name.common}
           </NavLink>
         )}  
    </div>
  )
}

export default CountryBorders
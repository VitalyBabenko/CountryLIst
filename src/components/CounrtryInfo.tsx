import { FC } from 'react';
import { useAppSelector } from '../hooks/redux'
import '../scss/countryInfo.scss'

interface CountryInfoProps {
   officialName?: string;
   flags?: { png: string };
   population?: number;
   region?: string;
   subregion?: string;
   capital?: [string];
   area?: number;
   startOfWeek?: string;
   languages?: any;
}

const CounrtryInfo: FC<CountryInfoProps> = ({
   officialName,
   population,
   region,
   subregion,
   capital,
   area,
   startOfWeek,
   languages
}) => {
   const { darkMode } = useAppSelector(state => state.darkModeReducer)
   return (
      <ul className={darkMode ? 'country-info-dark' : 'country-info'} >
         
         {officialName && <li>Official name:  <span>{officialName}</span></li>}
         {population && <li>Population:  <span>{population}</span></li>}
         {region && <li>Region:  <span>{region}</span></li>}
         {subregion && <li>Sub Region:  <span>{region}</span></li>}
         {capital && <li>Capital:  <span>{capital}</span></li>}
         {area && <li>Area:  <span>{area}</span></li>}
         {startOfWeek && <li>Start of week: <span>{startOfWeek}</span></li>}
         {languages && <li>Languages: <span>{Object.values(languages).join(', ')}</span></li>}

      </ul>
  )
}

export default CounrtryInfo
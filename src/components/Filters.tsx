import {FC, ChangeEvent} from 'react'
import { MdSearch, MdKeyboardArrowDown } from 'react-icons/md'
import { useAppSelector } from '../hooks/redux'
import  '../scss/filters.scss'

const Filters: FC = () => {
  const { darkMode } = useAppSelector(state => state.darkModeReducer)
  const { countries } = useAppSelector(state => state.countriesReducer)

 
  const debounce = (fn: Function, ms = 250) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  const inputFilterHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    debounce(() => {
      let data = [...countries]
      data = data.filter(country =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
      console.log(data)
   },250)
  }
  

  // const handleSearch = (search:string, region:string) => {
  //   let result = [...countries];
  //   if(region) {
  //     result = result.filter(country => country.region.includes(region))
  //   }
  //   if(search) {
  //     result = result.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
  //   }
  // }


  return (
   <div className={darkMode ? "filters-dark" : 'filters'}>
    <MdSearch />
    <MdKeyboardArrowDown />
      <input
        onInput={inputFilterHandler}
        type="text"
        placeholder="Seatch for a country..." />
      
    <select id="regionFilter">
      <option value="all">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="North America">North America</option>
      <option value="South America">South America</option>
      <option value="Australia">Australia</option>
   </select>
 </div>
  )
}

export default Filters
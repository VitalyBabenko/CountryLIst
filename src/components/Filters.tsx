import {FC, ChangeEvent} from 'react'
import { MdSearch, MdKeyboardArrowDown } from 'react-icons/md'
import { useAppDispatch } from '../hooks/redux'
import { fetchCountries } from '../store/reducers/ActionCreators'
import  '../scss/filters.scss'
import { countriesSlice } from '../store/reducers/CountriesSlice'

const Filters: FC = () => {
  const dispatch = useAppDispatch()
  const { filterByInput } = countriesSlice.actions;

  const debounce = (fn: Function, ms = 250) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  let handleInputFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterByInput(e.target.value))
  }

  handleInputFilter = debounce(handleInputFilter);

  const handleRegionFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(fetchCountries(e.target.value))
  }

  return (
    <div className='filters'>
      <MdSearch />
      <MdKeyboardArrowDown />
      <input
        onInput={handleInputFilter}
        type="text"
        placeholder="Seatch for a country..."
      />
      <select
        onChange={handleRegionFilter}
        id="regionFilter"
      >
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
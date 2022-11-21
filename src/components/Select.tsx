import { ChangeEvent, FC } from "react";
import { useAppDispatch } from "../hooks/redux";
import { fetchCountries } from "../store/reducers/ActionCreators";

const Select: FC = () => {
  const dispatch = useAppDispatch();
  const handleRegionFilter = (e: ChangeEvent<HTMLSelectElement>) =>
    dispatch(fetchCountries(e.target.value));
  return (
    <select onChange={handleRegionFilter} id="regionFilter">
      <option value="all">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="North America">North America</option>
      <option value="South America">South America</option>
      <option value="Australia">Australia</option>
    </select>
  );
};

export default Select;

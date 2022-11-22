import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { fetchCountries } from "../store/reducers/ActionCreators";

const Select: FC = () => {
  const dispatch = useAppDispatch();
  const [selectValue, setSelectValue] = useState("all");

  useEffect(() => {
    dispatch(fetchCountries(selectValue));
    // eslint-disable-next-line
  }, [selectValue]);

  return (
    <select
      value={selectValue}
      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
        setSelectValue(e.target.value)
      }
    >
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

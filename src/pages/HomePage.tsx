import { ChangeEvent, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import CountryCard from "../components/CountryCard";
import { fetchCountries } from "../store/reducers/ActionCreators";

import "../scss/homePage.scss";
import { ICountry } from "../types/ICountry";
import Pagination from "../components/Pagination";
import Select from "../components/Select";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const { countries, isLoading } = useAppSelector(
    (state) => state.countriesReducer
  );

  // const handleRegionFilter = (e: ChangeEvent<HTMLSelectElement>) =>
  //   dispatch(fetchCountries(e.target.value));

  const filterByInput = (countries: ICountry[]) => {
    if (!inputValue) return countries;
    return countries.filter((c) =>
      c.name.common.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(12);
  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    firstCountryIndex,
    lastCountryIndex
  );

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const result = filterByInput(countries);
      setFilteredCountries(result);
      setCurrentPage(1);
    }, 250);
    return () => clearTimeout(Debounce);
    // eslint-disable-next-line
  }, [inputValue, countries]);

  return (
    <div className="home-page">
      <div className="filters">
        <MdSearch />
        <MdKeyboardArrowDown />
        <input
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          type="text"
          placeholder="Seatch for a country..."
        />
        <Select />
      </div>

      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {currentCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}

          <Pagination
            itemsPerPage={countriesPerPage}
            totalItems={filteredCountries.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;

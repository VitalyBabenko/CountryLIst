import { useState, useEffect } from "react";
import { useAppSelector } from "../hooks/redux";
import CountryCard from "../components/CountryCard";
import "../scss/homePage.scss";
import { ICountry } from "../types/ICountry";
import Pagination from "../components/Pagination";
import Select from "../components/Select";
import Input from "../components/Input";
import usePagination from "../hooks/usePagination";
import LoadingPage from "./LoadingPage";

const HomePage = () => {
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const { countries, isLoading } = useAppSelector(
    (state) => state.countriesReducer
  );
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 12,
    count: filteredCountries.length,
  });

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  if (isLoading) return <LoadingPage />;
  return (
    <div className="home-page">
      <div className="filters">
        <Input
          countries={countries}
          setFiltredCountires={setFilteredCountries}
          setPage={setPage}
        />
        <Select />
      </div>

      {filteredCountries
        .slice(firstContentIndex, lastContentIndex)
        .map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}

      <Pagination
        page={page}
        totalPages={totalPages}
        prevPage={prevPage}
        nextPage={nextPage}
        setPage={setPage}
      />
    </div>
  );
};

export default HomePage;

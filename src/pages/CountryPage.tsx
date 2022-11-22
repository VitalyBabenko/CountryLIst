import { FC, useEffect } from "react";
import { MdArrowBack } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import CountryBorders from "../components/CountryBorders";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import "../scss/countryPage.scss";
import { fetchCountry } from "../store/reducers/ActionCreators";
import LoadingPage from "./LoadingPage";

const CountryPage: FC = () => {
  const dispatch = useAppDispatch();
  const { country, isLoading, error } = useAppSelector(
    (state) => state.countryReducer
  );
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    dispatch(fetchCountry(name));
    // eslint-disable-next-line
  }, [name]);

  if (isLoading) return <LoadingPage />;
  if (error) return <h1>Error</h1>;

  return (
    <div className="country-page">
      <button onClick={() => navigate(-1)}>
        <MdArrowBack />
        Back
      </button>
      <img src={country.flags.svg} alt="country-flag" />
      <h2>{country.name.common}</h2>

      <ul className="country-info">
        <li>
          Official name: <span>{country.name.official}</span>
        </li>
        <li>
          Population: <span>{country.population}</span>
        </li>
        <li>
          Region: <span>{country.region}</span>
        </li>
        <li>
          Sub Region: <span>{country.subregion}</span>
        </li>
      </ul>

      <ul className="country-info">
        <li>
          Capital: <span>{country.capital}</span>
        </li>
        <li>
          Area: <span>{country.area}</span>
        </li>
        <li>
          Start of week: <span> {country.startOfWeek}</span>
        </li>
        <li>
          Languages: <span>{Object.values(country.languages).join(", ")}</span>
        </li>
      </ul>
      <CountryBorders borders={country.borders} />
    </div>
  );
};

export default CountryPage;

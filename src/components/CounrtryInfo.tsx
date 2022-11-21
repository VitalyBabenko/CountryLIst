import { FC } from "react";
import "../scss/countryInfo.scss";

interface CountryInfoProps {
  population?: number;
  region?: string;
  capital?: [string];
}

const CounrtryInfo: FC<CountryInfoProps> = ({
  population,
  region,
  capital,
}) => {
  return (
    <ul className="country-info">
      <li>
        Population: <span>{population}</span>
      </li>
      <li>
        Region: <span>{region}</span>
      </li>
      <li>
        Capital: <span>{capital}</span>
      </li>
    </ul>
  );
};

export default CounrtryInfo;

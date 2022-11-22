import { FC } from "react";
import "../scss/loadingPage.scss";

const LoadingPage: FC = () => {
  return (
    <div className="loadingPage">
      <span className="loader"></span>
    </div>
  );
};

export default LoadingPage;

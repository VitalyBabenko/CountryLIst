import { FC } from "react";
import "../scss/pagination.scss";

interface PaginationProps {
  page: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  page,
  totalPages,
  prevPage,
  setPage,
  nextPage,
}) => {
  if (totalPages < 2) return <></>;
  return (
    <ul className="pagination">
      <li onClick={prevPage}>&larr;</li>
      {/* @ts-ignore */}
      {[...Array(totalPages).keys()].map((el) => (
        <li
          onClick={() => setPage(el + 1)}
          key={el}
          className={`page ${page === el + 1 ? "active" : ""}`}
        >
          {el + 1}
        </li>
      ))}
      <li onClick={nextPage}>&rarr;</li>
    </ul>
  );
};

export default Pagination;

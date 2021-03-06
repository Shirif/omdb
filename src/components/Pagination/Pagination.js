import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPageSearchData,
  fetchMovies,
} from "../../store/actionCreators/action";

import "./Pagination.scss";

const Pagination = ({ totalResults }) => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.movies.searchData);
  const currentPage = Number(
    useSelector((state) => state.movies.searchData.page)
  );
  const pageSize = 10;
  const pagesCount = Math.ceil(+totalResults / pageSize);
  const allPages = [];
  const pageRangeDisplayed = 5;

  for (let i = 1; i <= pagesCount; i++) {
    allPages.push(i);
  }

  const setCurrentPage = (e) => {
    const page = e.target.innerText;
    dispatch(setPageSearchData(page));
    dispatch(
      fetchMovies({ title: searchData.title, year: searchData.year, page })
    );
  };

  const nextPage = () => {
    const page = +searchData.page;
    if (page < pagesCount) {
      dispatch(setPageSearchData(page + 1));
      dispatch(
        fetchMovies({ title: searchData.title, year: searchData.year, page })
      );
    }
  };

  const prevPage = () => {
    const page = +searchData.page;
    if (page > 1) {
      dispatch(setPageSearchData(page - 1));
      dispatch(
        fetchMovies({ title: searchData.title, year: searchData.year, page })
      );
    }
  };

  const elementsPages = allPages
    .slice(
      pagesCount !== 7
        ? currentPage < pageRangeDisplayed
          ? 0
          : currentPage < allPages.length - 3
          ? currentPage - pageRangeDisplayed + 3
          : allPages.length - pageRangeDisplayed
        : 0,
      pagesCount !== 7
        ? currentPage < pageRangeDisplayed
          ? pageRangeDisplayed
          : currentPage < allPages.length - 3
          ? currentPage + 1
          : allPages.length
        : 7
    )
    .map((p) => {
      return (
        <li
          className={currentPage === p ? "active page-select" : "page-select"}
          key={p}
          onClick={setCurrentPage}
        >
          {p}
        </li>
      );
    });

  const ellipsis = <li>&#8230;</li>;

  const startPage =
    pagesCount !== 7 ? (
      currentPage > 4 ? (
        <React.Fragment>
          <li className="page-select" onClick={setCurrentPage}>
            {allPages[0]}
          </li>
          {ellipsis}
        </React.Fragment>
      ) : null
    ) : null;

  const lastPage =
    pagesCount !== 7 ? (
      currentPage <= allPages.length - 4 ? (
        <React.Fragment>
          {ellipsis}
          <li className="page-select" onClick={setCurrentPage}>
            {allPages.length}
          </li>
        </React.Fragment>
      ) : null
    ) : null;

  const prev = (
    <li className="page-select" onClick={prevPage}>
      &#8249;
    </li>
  );

  const next = (
    <li className="page-select" onClick={nextPage}>
      &#8250;
    </li>
  );

  return (
    <ul className="pagination">
      {prev}
      {startPage}
      {elementsPages}
      {lastPage}
      {next}
    </ul>
  );
};

export default Pagination;

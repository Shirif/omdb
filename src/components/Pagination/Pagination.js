import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageSearchData, fetchMovies } from "../../store/actionCreators/action";

import "./Pagination.css";

const Pagination = ({ totalResults }) => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.movies.searchData);
  const pageSize = 10;

  const pagesCount = Math.ceil(+totalResults / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const setCurrentPage = (e) => {
    const page = e.target.innerText;
    dispatch(setPageSearchData(page));
    dispatch(fetchMovies({ title: searchData.title, year: searchData.year, page }));
  };

  const listElements = pages.map((p) => {
    return (
      <li searchData={searchData} className={+searchData.page === p ? "active" : ""} key={p} onClick={setCurrentPage}>
        {p}
      </li>
    );
  });

  return <ul className="pagination">{listElements}</ul>;
};

export default Pagination;

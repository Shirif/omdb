import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, favoriteToggle, searchData } from "../../store/actionCreators/action";

import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const initialState = {
    title: "",
    year: "",
    page: "1",
  };
  const [inputData, setInputData] = useState(initialState);
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.app.favorite);

  const onChangeHandler = (e) => {
    setInputData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(inputData));
    dispatch(searchData(inputData));
    setInputData(initialState);
  };

  return (
    <div className="nav">
      <h1>OMDb</h1>
      <div>
        <button onClick={() => dispatch(favoriteToggle())} type="button" className="favorite-button">
          Favorite
        </button>
      </div>
      {!favorite && (
        <form onSubmit={submitHandler}>
          <div className="search">
            <input
              onChange={onChangeHandler}
              type="text"
              name="year"
              value={inputData.year}
              size="1"
              placeholder="Year"
            ></input>
            <input
              onChange={onChangeHandler}
              type="text"
              name="title"
              value={inputData.title}
              size="12"
              placeholder="Title"
            ></input>
            <button type="submit">
              <FontAwesomeIcon className="search-icon" size="lg" icon={faSearch} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NavBar;

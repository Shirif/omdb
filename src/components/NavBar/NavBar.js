import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, favoriteToggle, searchData, noChangeMovie } from "../../store/actionCreators/action";

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
  const clearInput = () => {
    setInputData(initialState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(inputData));
    dispatch(searchData(inputData));
    //setInputData(initialState);
  };

  return (
    <div className="nav">
      <h1>OMDb</h1>
      {!favorite && (
        <form onSubmit={submitHandler}>
          <div className="search">
            <input
              onChange={onChangeHandler}
              type="text"
              name="title"
              value={inputData.title}
              placeholder="Title"
              onFocus={clearInput}
            ></input>
            <button type="submit">
              <FontAwesomeIcon className="search-icon" size="lg" icon={faSearch} />
            </button>
          </div>
        </form>
      )}
      <div>
        <button
          onClick={() => {
            dispatch(favoriteToggle());
            dispatch(noChangeMovie());
          }}
          type="button"
          className="favorite-button"
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default NavBar;

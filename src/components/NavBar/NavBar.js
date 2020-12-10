import React, { useState } from "react";

import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({getData}) => {
  const initialState = {
    title: "",
    year: "",
  };
  const [inputData, setInputData] = useState(initialState);
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
    getData(inputData);
    setInputData(initialState);
  };


  return (
    <div className="nav">
      <h1>OMDb</h1>
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
    </div>
  );
};

export default NavBar;

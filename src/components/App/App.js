import React from "react";
import { useState } from "react";
import ServiceApi from "../ServiceApi";
import NavBar from "../NavBar";
import Description from "../Description";
import Spinner from "../Spinner";
import "./App.css";

const App = () => {
  const initialState = {
    Title: "Search movie!",
    Poster: "",
  };
  const [spinner, setSpinner] = useState(false);
  const [movie, setMovie] = useState(initialState);

  const getData = async ({ title, year }) => {
    setSpinner(true);
    const movie = await ServiceApi.getMovie(title, year);
    setMovie(movie);
    setSpinner(false);
  };

  return (
    <div className="App">
      <NavBar getData={getData} />
      <Description movie={movie} />
      {spinner && <Spinner />}
    </div>
  );
};

export default App;

import React, { useEffect, useState, useRef } from "react";
import ServiceApi from "../ServiceApi";
import NavBar from "../NavBar";
import Description from "../Description";
import Spinner from "../Spinner";
import ListMovies from "../ListMovies";

import "./App.css";

const App = () => {
  const initialState = {
    Title: "Search movie!",
    // Poster: " ",
    // Search : []
  };
  const [spinner, setSpinner] = useState(false);
  const [movie, setMovie] = useState(initialState);
  const prevMovie = useRef("");

  useEffect(() => {
  }, [movie]);

  const getData = async (id) => {
    setSpinner(true);
    const movie = await ServiceApi.getMovie(id);
    setMovie(movie);
    setSpinner(false);
  };
  const getAllData = async ({ title, year, page }) => {
    setSpinner(true);
    const movie = await ServiceApi.getListMovies(title, year, page);
    setMovie(movie);
    prevMovie.current = movie;
    setSpinner(false);
  };

  const prevState = () => {
    setMovie(prevMovie.current);
  };

  return (
    <div className="App">
      <NavBar getData={getData} getAllData={getAllData} />
      {movie.Search ? <ListMovies movie={movie} getData={getData} /> : <Description movie={movie} prevState={prevState} />}
      {spinner && <Spinner />}
    </div>
  );
};

export default App;

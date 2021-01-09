import React from 'react';
import { useSelector } from "react-redux";
import NavBar from "../NavBar";
import Description from "../Description";
import Spinner from "../Spinner";
import ListMovies from "../ListMovies";
import Pagination from "../Pagination";

import "./App.css";

const App = () => {
  const state = useSelector();
  const movies = state.movies.fetchMovies;
  const loading = state.app.loading;
  const favorite = state.app.favorite;
  const changeMovie = state.movies.changeMovie;
  const totalResults = state.movies.fetchMovies.totalResults;

  return (
    <div className="App">
      <NavBar />
      {changeMovie || movies.Error ? <Description changeMovie={changeMovie} /> : <ListMovies />}
      {loading && <Spinner />}
      {!favorite && <Pagination totalResults={totalResults} />}
    </div>
  );
};

export default App;

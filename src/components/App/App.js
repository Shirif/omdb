import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../NavBar";
import Description from "../Description";
import Spinner from "../Spinner";
import ListMovies from "../ListMovies";
import Pagination from "../Pagination";

import "./App.css";

const App = () => {
  const movies = useSelector((state) => state.movies.fetchMovies);
  const loading = useSelector((state) => state.app.loading);
  const favorite = useSelector((state) => state.app.favorite);
  const changeMovie = useSelector((state) => state.movies.changeMovie);
  const totalResults = useSelector((state) => state.movies.fetchMovies.totalResults);

  return (
    <div className="App">
      <NavBar />
      {changeMovie && <Description changeMovie={changeMovie} />}
      {!favorite && movies.Error ? <Description changeMovie={changeMovie} /> : !changeMovie && <ListMovies />}
      {loading && <Spinner />}
      {!favorite && <Pagination totalResults={totalResults} />}
    </div>
  );
};

export default App;

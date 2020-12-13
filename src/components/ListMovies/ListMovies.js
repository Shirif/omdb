import React, { Component, useState } from "react";

import "./ListMovies.css";
import noImg from "../Pictures/no_image_available.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare as like } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare as dislike } from "@fortawesome/free-regular-svg-icons";

const ListMovies = ({ movie, getData }) => {
  const initialState = [
    {
      Title: "The Matrix Reloaded",
      Year: "2003",
      imdbID: "tt0234215",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
  ];

  const [myFavoritMovies, setMyFavoritMovies] = useState(initialState);

  const onChangeMyFavoritMovies = (e) => {
    // console.log(e);

    let id;
    const elem = e.target.parentNode;
    if (elem.parentNode.className === "list-element") {
      id = elem.parentNode.id;
    } else if (elem.parentNode.parentNode.className === "list-element") {
      id = elem.parentNode.parentNode.id;
    }
    if (id) {
      const index = myFavoritMovies.findIndex((item) => item.imdbID === id);
      if (index !== -1) {
        setMyFavoritMovies((prev) => {
          console.log(prev);
          return prev.filter((item) => item.imdbID !== id);
        });
      } else {
        const arr = movie.Search.find((item) => item.imdbID === id);
        setMyFavoritMovies((prev) => {
          console.log(prev);
          return [...prev, arr];
        });
      }
    } else {
      console.log("elem", elem.id);
      getData(elem.id);
    }
  };

  const elementDiscription = movie.Search.map((mov) => {
    return (
      <div key={mov.imdbID} id={mov.imdbID} onClick={onChangeMyFavoritMovies} className="list-element">
        <div className="title-element">
          <p>{mov.Title}</p>
          <p>{mov.Year}</p>
          {myFavoritMovies.find((item) => item.imdbID === mov.imdbID) ? (
            <FontAwesomeIcon className="like-icon" size="2x" icon={like} />
          ) : (
            <FontAwesomeIcon className="like-icon" size="2x" icon={dislike} />
          )}
        </div>
        <img src={mov.Poster !== "N/A" ? mov.Poster : noImg} alt="img"></img>
      </div>
    );
  });

  // console.log(movie);

  //   const dataList = JSON.stringify(movie, null, 2);

  return (
    <div className="list-movies">
      {/* <pre>{dataList}</pre> */}
      {elementDiscription}
    </div>
  );
  // }
};

export default ListMovies;

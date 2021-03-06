import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { noChangeMovie } from "../../store/actionCreators/action";
import noImg from "../../Images/no_image_available.png";
import "./Description.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose as close } from "@fortawesome/free-regular-svg-icons";

const Description = ({ changeMovie }) => {
  const dispatch = useDispatch({});
  const movies = useSelector((state) => state.movies.fetchMovies);
  const favorite = useSelector((state) => state.app.favorite);
  if (movies.Error && !favorite) dispatch(noChangeMovie());
  const elementTitle = movies.Error ? (
    <h1>{movies.Error}</h1>
  ) : (
    <h1>{changeMovie.Title}</h1>
  );
  const elementDiscription = changeMovie
    ? Object.keys(changeMovie).map((mov) => {
        if (
          mov !== "Ratings" &&
          mov !== "Response" &&
          mov !== "Website" &&
          mov !== "Title" &&
          mov !== "Language" &&
          mov !== "Poster" &&
          mov !== "DVD" &&
          mov !== "BoxOffice" &&
          mov !== "Metascore" &&
          mov !== "Plot" &&
          mov !== "Error"
        ) {
          return (
            <p key={mov}>
              <b>{mov}: &nbsp; </b>
              {changeMovie[mov]}
            </p>
          );
        } else return null;
      })
    : null;
  return (
    <div className="container">
      <div className="description">
        {changeMovie.Year && (
          <FontAwesomeIcon
            onClick={() => dispatch(noChangeMovie())}
            className="close"
            size="2x"
            icon={close}
          />
        )}
        {elementTitle}
        {elementDiscription}
      </div>
      {changeMovie.Poster && (
        <div className="poster">
          <img
            src={changeMovie.Poster !== "N/A" ? changeMovie.Poster : noImg}
            alt=""
          ></img>
        </div>
      )}
    </div>
  );
};

export default Description;

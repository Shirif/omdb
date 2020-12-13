import noImg from "../Pictures/no_image_available.png";
import "./Description.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose as close } from "@fortawesome/free-regular-svg-icons";

const Description = ({ movie, prevState }) => {
  const elementTitle = movie.Error ? <h1>{movie.Error}</h1> : <h1>{movie.Title}</h1>;
  const elementDiscription = Object.keys(movie).map((mov) => {
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
          <b>{mov}:	&nbsp; </b>
          {movie[mov]}
        </p>
      );
    }
    else return null;
  });
  return (
    <div className="description-container">
      <div className="description">
      {movie.Year && <FontAwesomeIcon onClick={prevState} className="close-icon" size="2x" icon={close} />}
        {elementTitle}
        {elementDiscription}
      </div>
      { movie.Poster && <div className="poster-img">
      <img src={movie.Poster !== "N/A" ? movie.Poster : noImg} alt=""></img>
      </div>}
    </div>
  );
  // }
};

export default Description;

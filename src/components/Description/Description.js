import "./Description.css";

const Description = ({ movie }) => {
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
        {elementTitle}
        {elementDiscription}
      </div>
      <div className="poster-img">
        <img src={movie.Poster} alt=""></img>
      </div>
    </div>
  );
  // }
};

export default Description;

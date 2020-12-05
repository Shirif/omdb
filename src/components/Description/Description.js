import "./Description.css";

const Description = ({ state }) => {
  const { Title, Genre, Actors, Director, Released, Runtime, Poster } = state;
  if(Genre || Actors){
    return (
      <div className='description-container'>
      <div className="description">
        <h1>{Title}</h1>
        <p><b>Genre:</b> {Genre}</p>
        <p><b>Actors:</b> {Actors}</p>
        <p><b>Director:</b> {Director}</p>
        <p><b>Released:</b> {Released}</p>
        <p><b>Runtime:</b> {Runtime}</p>
        
      </div>
      <div className='poster-img'><img src={Poster} alt=""></img></div>
      </div>
    );
  } else {
    return (
      <div className='description-container'>
      <div className="description">
        <h1>{Title}</h1>
      </div>
      <div className='poster-img'><img src={Poster} alt=""></img></div>
      </div>
    );
  }
  
};

export default Description;

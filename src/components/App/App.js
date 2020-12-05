import React from "react";
import ServiceApi from "../ServiceApi";
import NavBar from "../NavBar";
import Description from "../Description";
import Spinner from "../Spinner";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "Search movie!",
      Genre: "",
      Actors: "",
      Director: "",
      Released: "",
      Runtime: "",
      Poster: "",
      Year: "",
      isLoading: false,
      };
  }

  dataUpdate = async (title, year) => {
    this.setState({isLoading: true,});
    const movie = await ServiceApi.getMovie(title, year);
    if (movie.Error) {
      console.log(movie.Error);
      this.setState({
        Title: movie.Error,
        Genre: "",
        Actors: "",
        Director: "",
        Released: "",
        Runtime: "",
        Poster: "",
        isLoading: false,
      });
    } else {
      this.setState({
        Title: movie.Title,
        Genre: movie.Genre,
        Actors: movie.Actors,
        Director: movie.Director,
        Released: movie.Released,
        Runtime: movie.Runtime,
        Poster: movie.Poster,
        isLoading: false,
      });
    }
  };

  render() {
    const{isLoading} = this.state;
    return (
      <div className="App">
        <NavBar dataUpdate={this.dataUpdate} />
        <Description state={this.state} />
        {isLoading ? <Spinner /> : <p></p> }
      </div>
    );
  }
}

export default App;

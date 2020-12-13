export default class ServiceApi {
  static root = "http://www.omdbapi.com/?apikey=ea3556f&";
  static getResources = async (path) => {
    const response = await fetch(this.root + path);
    return await response.json();
  };

  static getMovie = async (id) => {
      const movie = await this.getResources(`i=${id}`);
      // console.log(movie);
      console.log(this.root + `i=${id}`);
      return movie;
  }
  static getListMovies = async (title, year, page) => {
      const movie = await this.getResources(`type=movie&s=${title}&y=${year}&page=${page}`);
      // console.log(movie);
      console.log(this.root + `s=${title}&y=${year}&page=${page}`);
      return movie;
  }

}

export default class ServiceApi {
  static root = "http://www.omdbapi.com/?apikey=ea3556f&type=movie&";
  static getResources = async (path) => {
    const response = await fetch(this.root + path);
    return await response.json();
  };

  static getMovie = async (title, year) => {
      const movie = await this.getResources(`t=${title}&y=${year}`);
      // console.log(movie);
      console.log(this.root + `t=${title}&y=${year}`);
      return movie;
  }
  static getListMovies = async (title, year, page) => {
      const movie = await this.getResources(`s=${title}&y=${year}&page=${page}`);
      // console.log(movie);
      console.log(this.root + `s=${title}&y=${year}&page=${page}`);
      return movie;
  }

}

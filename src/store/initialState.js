const initialState = {
  movieValue: {
    myFavoritMovies: [],
    changeMovie: false,
    fetchMovies: { Error: 'Search movie!' },
    searchData: {
      title: '',
      year: '',
      page: ''
    }
  },
  appValue: {
    loading: false,
    favorite: false
  }
};

export default initialState;

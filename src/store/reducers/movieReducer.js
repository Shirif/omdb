import {
  ADD_FAVORITE_MOVIES,
  REMOVE_FAVORITE_MOVIES,
  FETCH_MOVIES,
  CHANGE_MOVIE,
  NO_CHANGE_MOVIE,
  SEARCH_DATA,
  SET_PAGE_SEARCH_DATA,
  SHOW_ALERT,
  START_PAGE,
} from "../actionCreators/actionTypes";
import initialState from "../initialState";

export const movieReducer = (state = initialState.movieValue, action) => {
  switch (action.type) {
    case ADD_FAVORITE_MOVIES:
      //  return { ...state, myFavoritMovies: state.myFavoritMovies.concat([action.payload]) };
      return {
        ...state,
        myFavoritMovies: [...state.myFavoritMovies, action.payload],
      };
    case REMOVE_FAVORITE_MOVIES:
      return {
        ...state,
        myFavoritMovies: state.myFavoritMovies.filter(
          (item) => item.imdbID !== action.payload
        ),
      };
    case FETCH_MOVIES:
      return { ...state, fetchMovies: action.payload };
    case CHANGE_MOVIE:
      return { ...state, changeMovie: action.payload };
    case NO_CHANGE_MOVIE:
      return { ...state, changeMovie: false };
    case SEARCH_DATA:
      return { ...state, searchData: action.payload };
    case SET_PAGE_SEARCH_DATA:
      return {
        ...state,
        searchData: { ...state.searchData, page: action.payload },
      };
    case SHOW_ALERT:
      return {
        ...state,
        fetchMovies: { ...state.fetchMovies, Error: action.payload },
      };
    case START_PAGE:
      return { ...state, fetchMovies: initialState.movieValue.fetchMovies };

    default:
      return state;
  }
};

import {
  ADD_FAVORITE_MOVIES,
  REMOVE_FAVORITE_MOVIES,
  FETCH_MOVIES,
  SHOW_LOADER,
  HIDE_LOADER,
  CHANGE_MOVIE,
  NO_CHANGE_MOVIE,
  FAVORITE_TOGGLE,
  SEARCH_DATA,
  SET_PAGE_SEARCH_DATA,
  SHOW_ALERT,
  START_PAGE
} from './actionTypes';
import ServiceApi from '../../Api/ServiceApi';

export const addFavoriteMovies = (value) => {
  return {
    type: ADD_FAVORITE_MOVIES,
    payload: value
  };
};

export const removeFavoriteMovies = (value) => {
  return {
    type: REMOVE_FAVORITE_MOVIES,
    payload: value
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  };
};

export const changeMovie = (id) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const movie = await ServiceApi.getMovie(id);
      dispatch({ type: CHANGE_MOVIE, payload: movie });
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showAlert('Failed to fetch'));
      dispatch(hideLoader());
    }
  };
};

export const noChangeMovie = () => {
  return {
    type: NO_CHANGE_MOVIE
  };
};

export const fetchMovies = ({ title, year, page }) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const movies = await ServiceApi.getListMovies(title, year, page);
      dispatch({ type: FETCH_MOVIES, payload: movies });
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showAlert('Failed to fetch'));
      console.log(error);
      dispatch(hideLoader());
    }
  };
};

export const favoriteToggle = () => {
  return {
    type: FAVORITE_TOGGLE
  };
};
export const searchData = (value) => {
  return {
    type: SEARCH_DATA,
    payload: value
  };
};
export const setPageSearchData = (value) => {
  return {
    type: SET_PAGE_SEARCH_DATA,
    payload: value
  };
};
export const showAlert = (value) => {
  return {
    type: SHOW_ALERT,
    payload: value
  };
};

export const startPage = () => {
  return {
    type: START_PAGE
  };
};

import { SHOW_LOADER, HIDE_LOADER, FAVORITE_TOGGLE } from '../actionCreators/actionTypes';
import initialState from '../initialState';

export const appReducer = (state = initialState.appValue, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case FAVORITE_TOGGLE:
      return { ...state, favorite: !state.favorite };
    default:
      return state;
  }
};

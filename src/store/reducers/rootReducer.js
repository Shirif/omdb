import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { movieReducer } from './movieReducer';

const reducers = combineReducers({
  movies: movieReducer,
  app: appReducer
});

export default reducers;

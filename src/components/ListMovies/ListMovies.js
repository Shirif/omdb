import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare as like } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare as dislike } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovies, removeFavoriteMovies, changeMovie } from '../../store/actionCreators/action';
import './ListMovies.scss';
import noImg from '../../Images/no_image_available.png';

const ListMovies = () => {
  const dispatch = useDispatch({});
  const favorite = useSelector((state) => state.app.favorite);
  const myFavoritMovies = useSelector((state) => state.movies.myFavoritMovies);
  const movies = useSelector((state) => state.movies.fetchMovies.Search);
  const movList = favorite ? myFavoritMovies : movies;
  const onChangeMyFavoritMovies = (e) => {
    let id;
    const elem = e.target.parentNode;
    if (elem.parentNode.className === 'list-element') {
      id = elem.parentNode.id;
    } else if (elem.parentNode.parentNode.className === 'list-element') {
      id = elem.parentNode.parentNode.id;
    }
    if (id) {
      const index = myFavoritMovies.findIndex((item) => item.imdbID === id);
      if (index !== -1) {
        dispatch(removeFavoriteMovies(id));
      } else {
        const arr = movList.find((item) => item.imdbID === id);
        dispatch(addFavoriteMovies(arr));
      }
    } else {
      dispatch(changeMovie(elem.id));
    }
  };
  const elementDiscription = movList.map((mov) => {
    return (
      <div key={mov.imdbID} id={mov.imdbID} onClick={onChangeMyFavoritMovies} className='list-element'>
        <div className='title-element'>
          <p>{mov.Title}</p>
          <p>{mov.Year}</p>
          {myFavoritMovies.find((item) => item.imdbID === mov.imdbID) ? (
            <FontAwesomeIcon className='like-icon' size='2x' icon={like} />
          ) : (
            <FontAwesomeIcon className='like-icon' size='2x' icon={dislike} />
          )}
        </div>
        <img src={mov.Poster !== 'N/A' ? mov.Poster : noImg} alt='img'></img>
      </div>
    );
  });
  return <div className='list-movies'>{elementDiscription}</div>;
};

export default ListMovies;

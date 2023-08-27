import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie }) => {
  const [favorite, setFavorite] = React.useState(false);

  function handleFavoriteToogle() {
    setFavorite(!favorite);
  }

  const { pathname } = useLocation();

  return (
    <li className="movies-card">
      <img src={movie.image} alt={movie.title} className="movies-card__image"></img>
      <div className="movies-card__element">
        <p className="movies-card__title">{movie.title}</p>
        <div className="movies-card__buttons">
          {pathname === '/saved-movies' ? (
            <button type="button" className="movies-card__button movies-card__button_delete" />
          ) : (
            <button
              type="button"
              className={`movies-card__button movies-card__button${favorite ? '_active' : '_inactive'}`}
              onClick={handleFavoriteToogle}
            />
          )}
        </div>
      </div>
      <p className="movies-card__duration">{movie.duration}</p>
    </li>
  );
};

export default MoviesCard;

import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ card }) => {
  const [favorite, setFavorite] = React.useState(false);

  function handleFavoriteToogle() {
    setFavorite(!favorite);
  }

  const { pathname } = useLocation();

  return (
    <li className="movies-card">
      <img src={card.image} alt={card.title} className="movies-card__image"></img>
      <div className="movies-card__element">
        <h2 className="movies-card__title">{card.title}</h2>
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
      <p className="movies-card__duration">{card.duration}</p>
    </li>
  );
};

export default MoviesCard;

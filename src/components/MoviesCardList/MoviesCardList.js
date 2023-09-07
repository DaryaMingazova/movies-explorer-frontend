import './MoviesCardList.css';
import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({ cards, buttonMore }) => {
  const [isLoading, setLoading] = useState(false);

  const handlePreloader = () => {
    setLoading(true);
  };

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__lists">
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>

      {isLoading ? (
        <Preloader />
      ) : (
        buttonMore && (
          <div className="movies-card-list__button-container">
            <button className="movies-card-list__button" type="button" name="more" onClick={handlePreloader}>Ещё</button>
          </div>
        )
      )}
    </section>
  );
};

export default MoviesCardList;

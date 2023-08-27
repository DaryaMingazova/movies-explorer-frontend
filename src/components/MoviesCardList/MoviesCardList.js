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
    <section className="movies-cards-list">
      <ul className="movies-cards-list__lists">
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>

      {isLoading ? (
        <Preloader />
      ) : (
        buttonMore && (
          <div className="movies-cards-list__button-container">
            <button className="movies-cards-list__button" type="button" name="more" onClick={handlePreloader}>Ещё</button>
          </div>
        )
      )}
    </section>
  );
};

export default MoviesCardList;

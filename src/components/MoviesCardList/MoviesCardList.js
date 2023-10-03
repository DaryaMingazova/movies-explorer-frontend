import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ films, savedMoviesToggle, saveFilms, filmsRemains, handleMore }) => {
  const { pathName } = useLocation();

  return (
    <div className="cards">
      {films.length > 0 ? (
        <ul className="cards__list">
          {films.map((film) => (
            <MoviesCard
              key={film.id || film.movieId}
              film={film}
              savedMoviesToggle={savedMoviesToggle}
              saveFilms={saveFilms}
            />
          ))}
        </ul>
      ) : (
        <div className="cards__text">Ничего не найдено</div>
      )}

      {filmsRemains.length > 0 && pathName !== '/saved-movies' && (
        <div className="cards__button-container">
          <button className="cards__button" type="button" name="more" onClick={handleMore}>Ещё</button>
        </div>
      )}
    </div>
  );
};

export default MoviesCardList;

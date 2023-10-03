import './Movies.css';
import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi.js';

const Movies = ({ openPopup }) => {
  const [films, setFilms] = useState(null);
  const [filmsSaved, setFilmsSaved] = useState(null);
  const [preloader, setPreloader] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [filmsTumbler, setFilmsTumbler] = useState(false);
  const [filmsInputSearch, setFilmsInputSearch] = useState('');
  const [MoviesCount, setMoviesCount] = useState([]);
  const [filmsSeen, setFilmsSeen] = useState(null);
  const [filmsWithTumbler, setFilmsWithTumbler] = useState([]);
  const [filmsSeenWithTumbler, setFilmsSeenWithTumbler] = useState([]);

  useEffect(() => {
    setMoviesCount(getMoviesCount());
    const handlerResize = () => setMoviesCount(getMoviesCount());
    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);

  function getMoviesCount() {
    let countCards;
    const clientWidth = document.documentElement.clientWidth;
    const MoviesCountConfig = {
      '1200': [12, 4],
      '900': [9, 3],
      '768': [8, 2],
      '240': [5, 2],
    };

    Object.keys(MoviesCountConfig)
      .sort((a, b) => a - b)
      .forEach((key) => {
        if (clientWidth > +key) {
          countCards = MoviesCountConfig[key];
        }
      });

    return countCards;
  }

  function handleMore() {
    const spliceFilms = films;
    const newFilmsSeen = filmsSeen.concat(spliceFilms.splice(0, MoviesCount[1]));
    setFilmsSeen(newFilmsSeen);
    setFilms(spliceFilms);
  }

  async function handleGetMovies(inputSearch) {
    setFilmsTumbler(false);
    localStorage.setItem('filmsTumbler', false);

    if (!inputSearch) {
      setErrorMessage('Введите ключевое слово');
      return false;
    }

    setErrorMessage('');
    setPreloader(true);

    try {
      const data = await moviesApi.getMovies();
      let filterData = data.filter(({ nameRU }) => nameRU.toLowerCase().includes(inputSearch.toLowerCase()));
      localStorage.setItem('films', JSON.stringify(filterData));
      localStorage.setItem('filmsInputSearch', inputSearch);

      const spliceData = filterData.splice(0, MoviesCount[0]);
      setFilmsSeen(spliceData);
      setFilms(filterData);
      setFilmsSeenWithTumbler(spliceData);
      setFilmsWithTumbler(filterData);
    } catch (err) {
      setErrorMessage(
        'Во время запроса произошла ошибка. Подождите немного и попробуйте ещё раз'
      );

      setFilms([]);
      localStorage.removeItem('films');
      localStorage.removeItem('filmsTumbler');
      localStorage.removeItem('filmsInputSearch');
    } finally {
      setPreloader(false);
    }
  }

  async function handleGetMoviesTumbler(tumbler) {
    let filterDataShowed = [];
    let filterData = [];

    if (tumbler) {
      setFilmsSeenWithTumbler(filmsSeen);
      setFilmsWithTumbler(films);
      filterDataShowed = filmsSeen.filter(({ duration }) => duration <= 40);
      filterData = films.filter(({ duration }) => duration <= 40);
    } else {
      filterDataShowed = filmsSeenWithTumbler;
      filterData = filmsWithTumbler;
    }

    localStorage.setItem('films', JSON.stringify(filterDataShowed.concat(filterData)));
    localStorage.setItem('filmsTumbler', tumbler);
    setFilmsSeen(filterDataShowed);
    setFilms(filterData);
  }

  async function savedMoviesToggle(film, favorite) {
    if (favorite) {
      const objFilm = {
        image: 'https://api.nomoreparties.co' + film.image.url,
        trailer: film.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + film.image.url,
        movieId: film.id,
        country: film.country || 'Неизвестно',
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        nameRU: film.nameRU,
        nameEN: film.nameEN,
      };
      try {
        await mainApi.addMovies(objFilm);
        const newSaved = await mainApi.getMovies();
        setFilmsSaved(newSaved);
      } catch (err) {
        openPopup('Во время добавления фильма произошла ошибка.');
      }
    } else {
      try {
        await mainApi.deleteMovies(film._id);
        const newSaved = await mainApi.getMovies();
        setFilmsSaved(newSaved);
      } catch (err) {
        openPopup('Во время удаления фильма произошла ошибка.');
      }
    }
  }

  useEffect(() => {
    mainApi
      .getMovies()
      .then((data) => {
        setFilmsSaved(data);
      })
      .catch((err) => {
        openPopup(`Ошибка сервера ${err}`);
      });

    const localStorageFilms = localStorage.getItem('films');

    if (localStorageFilms) {
      const filterData = JSON.parse(localStorageFilms);
      setFilmsSeen(filterData.splice(0, getMoviesCount()[0]));
      setFilms(filterData);
      setPreloader(false);
    }

    const localStorageFilmsTumbler = localStorage.getItem('filmsTumbler');
    const localStorageFilmsInputSearch = localStorage.getItem('filmsInputSearch');

    if (localStorageFilmsTumbler) {
      setFilmsTumbler(localStorageFilmsTumbler === 'true');
    }

    if (localStorageFilmsInputSearch) {
      setFilmsInputSearch(localStorageFilmsInputSearch);
    }
  }, [openPopup]);

  return (
    <main className="movies">
      <SearchForm handleGetMovies={handleGetMovies} filmsTumbler={filmsTumbler} filmsInputSearch={filmsInputSearch} handleGetMoviesTumbler={handleGetMoviesTumbler} />
      {preloader && <Preloader />}
      {errorMessage && <div className="movies__text-error">{errorMessage}</div>}
      {!preloader && !errorMessage && films !== null && filmsSaved !== null && filmsSeen !== null && (
        <MoviesCardList handleMore={handleMore} filmsRemains={films} films={filmsSeen} savedMoviesToggle={savedMoviesToggle} filmsSaved={filmsSaved} />
      )}
    </main>
  );
};

export default Movies;

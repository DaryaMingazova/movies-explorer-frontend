import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__container">
        <input className="search__input" placeholder="Фильм" type="text" required />
        <button type="submit" className="search__button">Найти</button>
      </form>
     
     <label className="search__tumbler">
        <input type="checkbox" className="search__checkbox" />
        <span className="search__slider" />
        <p className="search__films">Короткометражки</p>
      </label>
      
    </section>
  );
};

export default SearchForm;

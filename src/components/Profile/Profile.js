import './Profile.css';
import React from 'react';
import {Link} from 'react-router-dom';

const Profile = () => {

  return (
    <main>
      <section className="profile">
        <form className="profile__form">
          <h3 className="profile__greeting">Привет, Виталий!</h3>
          <div className="profile__inputs">
            <p className="profile__text">Имя</p>
            <div className="profile__area profile__area_type_name">
              <input className="profile__settings" defaultValue="Виталий" minLength="2" maxLength="30"  placeholder="Введите имя" required />
            </div>
            <div className="profile__area profile__area_type_email">
              <input className="profile__settings" defaultValue="pochta@pochta.ru" placeholder="Введите почту" required />
            </div>
            <p className="profile__text">E-mail</p>
          </div>
          <Link to="/profile" className="profile__button">Редактировать</Link>
          <Link to="/" className="profile__link">Выйти из аккаунта</Link>
        </form>
      </section>
    </main>
  );
};

export default Profile;

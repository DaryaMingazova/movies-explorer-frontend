import './Profile.css';
import React from 'react';
import {Link} from 'react-router-dom';

import { useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

const Profile = ({ onSignOut, openPopup }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [lastName, setLastName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [lastEmail, setLastEmail] = useState(currentUser.email);
  const [isVisibleButton, setVisibleButton] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    mainApi.updateUserInfo({ name, email }).then(() => {
      setVisibleButton(false);
      setLastName(name);
      setLastEmail(email);
      openPopup('Данные успешно изменены!');
    })
    .catch((err) => {
      openPopup(`Что-то пошло не так! ${err}`);
    });
  };

  function handleNameChange(evt) {
    const value = evt.target.value;
    setName(value);

    if (value !== lastName) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  }

  function handleEmailChange(evt) {
    const value = evt.target.value;
    setEmail(value);

    if (value !== lastEmail) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  }

  return (
    <main>
      <section className="profile">
        <form className="profile__form" onSubmit={handleSubmit}>
          <h1 className="profile__greeting">Привет, {name}!</h1>
          <div className="profile__inputs">
            <span className="profile__text">Имя</span>
            <div className="profile__area profile__area_type_name">
              <input className="profile__settings" value={name} onChange={handleNameChange}/>
            </div>
            <div className="profile__area profile__area_type_email">
              <input className="profile__settings"value={email} onChange={handleEmailChange}/>
            </div>
            <span className="profile__text">E-mail</span>
          </div>
          <Link to="/profile" className="profile__button" disabled={!isVisibleButton}>Редактировать</Link>
          <Link to="/" className="profile__link" onClick={onSignOut}>Выйти из аккаунта</Link>
        </form>
      </section>
    </main>
  );
};

export default Profile;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
    
    return (
        <>
            <form className={ styles.signUpForm__form }
                name="signin"
            >
                <fieldset className={ styles.signUpForm__fieldSet }>
                    <label className={ styles.signUpForm__inputName }>
                        Имя
                        <input className={ styles.signUpForm__input }
                            type="text"
                            name="name"
                            placeholder="Дарья"
                            required
                        />
                        <span className={ styles.signUpForm__error }></span>
                    </label>
                    <label className={ styles.signUpForm__inputName }>
                        E-mail
                        <input className={ styles.signUpForm__input }
                            type="email"
                            name="email"
                            placeholder="pochta@yandex.ru"
                            required
                        />
                        <span className={ styles.signUpForm__error }></span>
                    </label>
                    
                    <label className={ styles.signUpForm__inputName }>
                        Пароль
                        <input className={ styles.signUpForm__input }
                            type="password"
                            name="password"
                            placeholder="Введите пароль!"
                            minLength="4"
                            maxLength="32"
                            required
                        />
                        <span className={ styles.signUpForm__error }></span>
                    </label>
                </fieldset>
                <button className={ styles.signUpForm__button }
                    type="submit"
                >
                    Войти
                </button>
                <span className={ styles.signUpForm__buttonWrapper }>
                    Уже зарегистрировались?
                    <Link to={ '/signin' }
                        className={ styles.signUpForm__link }
                    > Войти
                    </Link>
                </span>
            </form>
        </>
    );
};

export default SignUpForm;

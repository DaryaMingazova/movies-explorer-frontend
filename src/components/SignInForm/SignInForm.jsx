import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignInForm.module.css';

const SignInForm = () => {
    
    return (<>
        <form className={ styles.signInForm__form }
            name="signin"
        >
            <fieldset className={ styles.signInForm__fieldSet }>
                <label className={ styles.signInForm__inputName }>
                    E-mail
                    <input className={ styles.signInForm__input }
                        type="email"
                        name="email"
                        placeholder="pochta@yandex.ru"
                        required
                    />
                    <span className={ styles.signInForm__error }></span>
                </label>
                
                <label className={ styles.signInForm__inputName }>
                    Пароль
                    <input className={ styles.signInForm__input }
                        type="password"
                        name="password"
                        placeholder="Введите пароль!"
                        minLength="4"
                        maxLength="32"
                        required
                    />
                    <span className={ styles.signInForm__error }></span>
                </label>
            </fieldset>
            <button className={ styles.signInForm__button }
                type="submit"
            >
                Войти
            </button>
            <span className={ styles.signInForm__buttonWrapper }>
                    Еще не зарегистрированы?
                    <Link to={ '/signup' }
                        className={ styles.signInForm__link }
                    > Регистрация
                    </Link>
                </span>
        </form>
    </>);
};

export default SignInForm;

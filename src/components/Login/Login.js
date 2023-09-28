import Form from '../Form/Form';

function Login() {
  return (
    <main>
      <Form header="Рады видеть!" submit="Войти" question="Ещё не зарегистрированы?" link="Регистрация" path="/signup">
        <label className="form__item">
          <span className="form__item-text">E-mail</span>
          <input type="email" className="form__field" defaultValue="email@yandex.ru" placeholder="Введите почту" required />
          <span className="form__error">Что-то пошло не так...</span>
        </label>

        <label className="form__item">
          <span className="form__item-text">Пароль</span>
          <input type="password" className="form__field form__field_color-error" minLength="2" maxLength="30" placeholder="Введите пароль" required />
          <span className="form__error form__error-display">Что-то пошло не так...</span>
        </label>
      </Form>
    </main>
  );
}

export default Login;

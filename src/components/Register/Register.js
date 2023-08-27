import Form from '../Form/Form';

function Register() {
  return (
  	<section>
      <Form header="Добро пожаловать!" submit="Зарегистрироваться" question="Уже зарегистрированы?" link="Войти" path="/signin">
        <label className="form__item">
          <p className="form__item-text">Имя</p>
          <input type="text" className="form__field" defaultValue="Виталий" required minlength="2" maxlength="30" placeholder="Введите имя"/>
          <p className="form__error">Что-то пошло не так...</p>
        </label>

        <label className="form__item">
          <p className="form__item-text">E-mail</p>
          <input type="email" className="form__field" defaultValue="pochta@yandex.ru" required placeholder="Введите email"/>
          <p className="form__error">Что-то пошло не так...</p>
        </label>

        <label className="form__item">
          <p className="form__item-text">Пароль</p>
          <input type="password" className="form__field form__field_color-error" defaultValue="••••••••••••••" required minlength="2" maxlength="30" placeholder="Введите пароль"/>
          <p className="form__error form__error-display">Что-то пошло не так...</p>
        </label>
      </Form>
    </section>
  );
}

export default Register;

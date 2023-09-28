import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>

      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Дарья</h3>
          <p className="about-me__job">Веб-разработчик, 28 лет</p>
          <p className="about-me__description">
            Я&nbsp;живу в&nbsp;замечательном месте, Камчатском крае, закончила факультет прикладной математики и информатики. В 2022 году прошла курс С++&#8209;разработчик и в этом же году начала изучать курс от Яндекс.Практикума веб-разработчик.
          </p>

          <ul className="about-me__links">
            <li><a className="about-me__link" href="https://t.me/Darya_Mingazova" target="_blank" rel="noreferrer">Telegram</a></li>
            <li><a className="about-me__link" href="https://github.com/DaryaMingazova" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>

        <img src={avatar} alt="Фотография профиля" className="about-me__image" />
      </div>
    </section>
  );
};

export default AboutMe;

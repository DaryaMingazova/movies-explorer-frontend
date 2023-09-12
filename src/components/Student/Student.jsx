import classNames from 'classnames'
import React from 'react'
import avatar from '../../images/avatar.jpg'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Student.module.css'

export const Student = () => {
    return ( <section className={ styles.student }>
        <SectionTitle styleProps={ styles.student__title }>
            Студент
        </SectionTitle>
        <div className={ styles.student__bio }>
            <article className={ styles.student__text }>
                <h3 className={ styles.student__name }>Дарья</h3>
                <p className={ styles.student__status }>Веб-разработчик, 28 лет</p>
                <p className={ styles.student__cv }>Я&nbsp;живу в&nbsp;замечательном месте, Камчатском крае, закончила факультет прикладной математики и информатики. В 2022 году прошла курс С++&#8209;разработчик и в этом же году начала изучать курс от Яндекс.Практикума веб-разработчик.
                 </p>
                <ul className={ styles.student__links }>
                    <li>
                        <a className={ classNames( styles.student__link, 'linkAnimation' ) }
                            href="https://t.me/Darya_Mingazova"
                        >Telegram</a>
                    </li>
                    <li>
                        <a className={ classNames( styles.student__link, 'linkAnimation' ) }
                            href="https://github.com/DaryaMingazova"
                        >Github</a>
                    </li>
                </ul>
            </article>
            <img className={ styles.student__photo }
                src={ avatar }
                alt="Фотография пользователя"
            />
        </div>
    </section> )
}

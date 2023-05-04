import './Portfolio.css';
import icon from '../../images/portfolio__icon.svg';

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__text">Портфолио</div>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="/">
                        <p className="portfolio__title">Статичный сайт</p>
                        <img className="portfolio__icon" src={icon} alt="Стрелочка"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="/">
                        <p className="portfolio__title">Адаптивный сайт</p>
                        <img className="portfolio__icon" src={icon} alt="Стрелочка"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="/">
                        <p className="portfolio__title">Одностраничное приложение</p>
                        <img className="portfolio__icon" src={icon} alt="Стрелочка"/>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
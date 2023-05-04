import './AboutProject.css';

function AboutProject() {
    return (
        <section className="project">
            <h2 className="project__text">О проекте</h2>
            <div className="project__page">
                <div className="project__info">
                    <div className="project__item">
                        <h3 className="project__title">
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className="project__subtitle">
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="project__item">
                        <h3 className="project__title">
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className="project__subtitle">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className="project__timeline">
                    <p className="project__green">1 неделя</p>
                    <p className="project__grey">4 недели</p>
                    <p className="project__timeline-subtitle">Back-end</p>
                    <p className="project__timeline-subtitle">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
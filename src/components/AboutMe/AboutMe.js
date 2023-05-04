import './AboutMe.css';
import student from '../../images/student.jpg';

function AboutMe() {
    return (
        <section className="student">
            <h2 className="student__text">Студент</h2>
            <div className="student__profile">
                <div className="students__texts">
                    <h2 className="student__name">Полина</h2>
                    <p className="student__job">
                        Фронтенд-разработчик, 23 года
                    </p>
                    <p className="student__info">Я родилась в Республике Коми, в 2011 году переехала в Москву. Закончила геологический факультет МГУ им. М.В.Ломоносова. У меня есть чудесный кот. Я люблю ходить на концерты, а ещё увлекаюсь посткроссингом. 
                    В мир программирования меня привёл друг. Я влюбилась в веб-разработку, в том числе благодаря Яндекс Практикуму.
                    </p>
                    <a className="student__link" href="/">Github</a>
                </div>
                <img className="student__photo" src={student} alt="Фото студента"></img>
            </div>
        </section>
    )
}

export default AboutMe;
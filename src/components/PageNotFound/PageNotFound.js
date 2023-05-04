import {Link} from "react-router-dom";
import './PageNotFound.css'

function PageNotFound() {
    return (
        <div className="error-page">
            <div className="error-page__content">
                <h1 className="error-page__title">
                    404
                </h1>
                <p className="error-page__subtitle">
                    Страница не найдена
                </p>
            </div>
            <Link className="error-page__link" to="/">
                Назад
            </Link>
        </div>
    )
}

export default PageNotFound;
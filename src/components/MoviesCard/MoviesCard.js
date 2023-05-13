import './MoviesCard.css';

function MoviesCard({poster, title, duration, liked, saved = false}) {
    return (
        <li className="movies__card">
            <img className="movies__image" src={poster} alt="Кадр из фильма"/>
            <div className="movies__container">
                <h2 className="movies__title">{title}</h2>
                {
                    saved
                    ? <button className={'movies__remove'} type="button"/>
                    : <button className={'movies__like' + (liked ? ' movies__like_active' : '')} type="button"/>
                }
            </div>
            <p className="movies__duration">{duration}</p>
        </li>
    )
}

export default MoviesCard;
import React from 'react';

import './MoviesCard.css';

function MoviesCard({movie, liked, onLike, onUnlike, isSaved = false}) {

    const onLikeButtonClick = () => {
      if (movie.liked) {
        onUnlike(movie);
      } else {
        onLike(movie);
      }
    }

  const onRemoveButtonClick = () => {
    onUnlike(movie);
  }

    return (
        <li className="movies__card">
            <a href={movie.trailerLink}>
                <img className="movies__image" src={movie.imageUrl} alt="Кадр из фильма"/>
            </a>
            <div className="movies__container">
                <h2 className="movies__title">{movie.nameRU}</h2>
                {
                    isSaved
                    ? <button onClick={onRemoveButtonClick} className={'movies__remove'} type="button"/>
                    : <button onClick={onLikeButtonClick} className={'movies__like' + (liked ? ' movies__like_active' : '')} type="button"/>
                }
            </div>
            <p className="movies__duration">{`${Math.floor((movie.duration / 60))}ч ${movie.duration % 60}м`}</p>
        </li>
    )
}

export default MoviesCard;
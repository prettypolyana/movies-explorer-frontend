import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({movies, onLike, onUnlike, isSaved}) {
    return (
        <section className="movies">
            <ul className="movies__list">
                {
                    movies.map((movie) => (
                        <MoviesCard onLike={onLike} onUnlike={onUnlike} movie={movie} key={movie.id} liked={movie.liked} isSaved={isSaved}/>
                    ))
                }
            </ul>
        </section>
    )
}

export default MoviesCardList;
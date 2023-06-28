import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({movies, onLike, onUnlike, isSaved}) {
    return (
        <section className="movies-cards">
            <ul className="movies-cards__list">
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
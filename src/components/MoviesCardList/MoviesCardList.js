import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({movies}) {
    return (
        <section className="movies-cards">
            <ul className="movies-cards__list">
                {
                    movies.map((movie) => (
                        <MoviesCard poster={movie.poster} title={movie.title} duration={movie.duration} liked={movie.liked} saved={movie.saved}/>
                    ))
                }
            </ul>
        </section>
    )
}

export default MoviesCardList;
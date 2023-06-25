import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import '../Movies/Movies.css';
import Preloader from '../Preloader/Preloader';


function Movies({loggedIn, movies, initialSearch, initialOnlyShortFilms, isMoreMoviesAvailable, isLoading, onMoreButtonClick, onSearchSubmit, onOnlyShortFilmsChanged, onLike, onUnlike}) {
  return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <SearchForm
                    onSearchSubmit={onSearchSubmit}
                    initialSearch={initialSearch}
                    initialOnlyShortFilms={initialOnlyShortFilms}
                    onOnlyShortFilmsChanged={onOnlyShortFilmsChanged}
                    isMoviesNotFound={movies.length === 0}/>
                    {
                        isLoading ? <Preloader /> : <MoviesCardList movies={movies} onLike={onLike} onUnlike={onUnlike} />
                    }
            </main>
            {
                isMoreMoviesAvailable ? <button className="movies__more" onClick={onMoreButtonClick}>Ещё</button> : ''
            }
            <Footer />
        </>
    );
}

export default Movies;
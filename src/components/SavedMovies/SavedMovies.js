import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import '../SavedMovies/SavedMovies.css';

import Preloader from "../Preloader/Preloader";

function SavedMovies({loggedIn, movies, initialSearch, initialOnlyShortFilms, isMoreMoviesAvailable, isLoading, onMoreButtonClick, onSearchSubmit, onOnlyShortFilmsChanged, onUnlike}) {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="saved-movies">
                <SearchForm
                  onSearchSubmit={onSearchSubmit}
                  initialSearch={initialSearch}
                  initialOnlyShortFilms={initialOnlyShortFilms}
                  onOnlyShortFilmsChanged={onOnlyShortFilmsChanged}
                  isMoviesNotFound={movies.length === 0}/>
                {
                    isLoading ? <Preloader /> : <MoviesCardList movies={movies} onUnlike={onUnlike} isSaved={true} />
                }
            </main>
            {
                isMoreMoviesAvailable ? <button className="movies__more" onClick={onMoreButtonClick}>Ещё</button> : ''
            }
            <Footer />
        </>
    );
}

export default SavedMovies;
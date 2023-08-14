import React, { useEffect } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import '../SavedMovies/SavedMovies.css';

import Preloader from "../Preloader/Preloader";

function SavedMovies({loggedIn, movies, isMoreMoviesAvailable, isLoading, onMoreButtonClick, onSearchSubmit, onOnlyShortFilmsChanged, onUnlike, onLeave}) {
    
    useEffect(() => {
        return () => {
            onLeave();
        };
    }, []);

    return (
        <div className="page">
            <Header loggedIn={loggedIn} />
            <main className="saved-movies">
                <SearchForm
                  onSearchSubmit={onSearchSubmit}
                  initialSearch=""
                  initialOnlyShortFilms={false}
                  onOnlyShortFilmsChanged={onOnlyShortFilmsChanged}
                  isMoviesNotFound={movies.length === 0}
                  allowEmpty={true}/>
                {
                    isLoading ? <Preloader /> : <MoviesCardList movies={movies} onUnlike={onUnlike} isSaved={true} />
                }
            </main>
            {
                isMoreMoviesAvailable ? <button className="movies__more" onClick={onMoreButtonClick}>Ещё</button> : ''
            }
            <Footer />
        </div>
    );
}

export default SavedMovies;
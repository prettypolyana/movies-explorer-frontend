import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import '../SavedMovies/SavedMovies.css';

import film1 from '../../images/film1.png';
import film2 from '../../images/film2.png';
import film3 from '../../images/film3.png';

const movies = [
    {
        poster: film1,
        title: "33 слова о дизайне",
        duration: "1ч 47м",
        liked: true,
        saved: true,
    },
    {
        poster: film2,
        title: "Киноальманах «100 лет дизайна»",
        duration: "1ч 3м",
        liked: false,
        saved: true,
    },
    {
        poster: film3,
        title: "В погоне за Бенкси",
        duration: "1ч 42м",
        liked: false,
        saved: true,
    },
];

function SavedMovies() {
    return (
        <>
            <Header />
            <main className="saved-movies"> 
                <SearchForm />
                <MoviesCardList movies={movies} />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import '../Movies/Movies.css';

import film1 from '../../images/film1.png';
import film2 from '../../images/film2.png';
import film3 from '../../images/film3.png';
import film4 from '../../images/film4.png';
import film5 from '../../images/film5.png';
import film6 from '../../images/film6.png';
import film7 from '../../images/film7.png';
import film8 from '../../images/film8.png';
import film9 from '../../images/film9.png';
import film10 from '../../images/film10.png';
import film11 from '../../images/film11.png';
import film12 from '../../images/film12.png';

const movies = [
    {
        poster: film1,
        title: "33 слова о дизайне",
        duration: "1ч 47м",
        liked: true,
    },
    {
        poster: film2,
        title: "Киноальманах «100 лет дизайна»",
        duration: "1ч 3м",
        liked: false,
    },
    {
        poster: film3,
        title: "В погоне за Бенкси",
        duration: "1ч 42м",
        liked: false,
    },
    {
        poster: film4,
        title: "Баския: Взрыв реальности",
        duration: "1ч 21м",
        liked: false,
    },
    {
        poster: film5,
        title: "Бег это свобода",
        duration: "1ч 44м",
        liked: false,
    },
    {
        poster: film6,
        title: "Книготорговцы",
        duration: "1ч 56м",
        liked: true,
    },
    {
        poster: film7,
        title: "Когда я думаю о Германии ночью",
        duration: "1ч 59м",
        liked: false,
    },
    {
        poster: film8,
        title: "Gimme Danger: История Игги и The Stooges",
        duration: "1ч 42м",
        liked: false,
    },
    {
        poster: film9,
        title: "Дженис: Маленькая девочка грустит",
        duration: "1ч 42м",
        liked: true,
    },
    {
        poster: film10,
        title: "Соберись перед прыжком",
        duration: "1ч 10м",
        liked: true,
    },
    {
        poster: film11,
        title: "Пи Джей Харви: A dog called money",
        duration: "1ч 4м",
        liked: false,
    },
    {
        poster: film12,
        title: "По волнам: Искусство звука в кино",
        duration: "1ч 7м",
        liked: false,
    },
];

function Movies() {
    return (
        <>
            <Header />
            <main> 
                <SearchForm />
                <MoviesCardList movies={movies} />
            </main>
            <button className="movies__more">Ещё</button>
            <Footer />
        </>
    );
};

export default Movies;
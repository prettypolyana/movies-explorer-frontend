import {Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

import {mainApi} from '../../utils/MainApi';
import {moviesApi} from '../../utils/MoviesApi';

import {
  MOVIES_URL,
  MOVIE_SHORT_DURATION,
  LARGE_SCREEN_BREAKPOINT,
  MEDIUM_SCEEEN_BREAKPOINT,
  MOVIES_TO_SHOW_COUNT_LARGE_SCREEN,
  MOVIES_TO_SHOW_COUNT_MEDIUM_SCREEN,
  MOVIES_TO_SHOW_COUNT_SMALL_SCREEN,
  MOVIES_TO_ADD_COUNT_LARGE_SCREEN,
  MOVIES_TO_ADD_COUNT_MEDIUM_SCREEN
} from '../../utils/constants';

import {CurrentUserContext} from '../../contexts/CurrentUserContext';

import './App.css';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import NotProtectedRoute from '../NotProtectedRoute/NotProtectedRoute';

function App() {
  const navigate = useNavigate();

  const getMoviesToShowCount = (windowWidth) => {
    if (windowWidth > LARGE_SCREEN_BREAKPOINT) {
      return MOVIES_TO_SHOW_COUNT_LARGE_SCREEN;
    } else if (windowWidth > MEDIUM_SCEEEN_BREAKPOINT) {
      return MOVIES_TO_SHOW_COUNT_MEDIUM_SCREEN;
    } else {
      return MOVIES_TO_SHOW_COUNT_SMALL_SCREEN;
    }
  }

  const getMoviesToAddCount = (windowWidth) => {
    if (windowWidth > LARGE_SCREEN_BREAKPOINT) {
      return MOVIES_TO_ADD_COUNT_LARGE_SCREEN;
    } else {
      return MOVIES_TO_ADD_COUNT_MEDIUM_SCREEN;
    }
  }

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterSearchInput, setFilterSearchInput] = useState('');
  const [filterOnlyShortFilms, setFilterOnlyShortFilms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesToShowCount, setMoviesToShowCount] = useState(getMoviesToShowCount(windowWidth));
  const [moviesToAddCount, setMoviesToAddCount] = useState(getMoviesToAddCount(windowWidth));
  const shownMovies = filteredMovies.slice(0, moviesToShowCount);
  const isMoreMoviesAvailable = filteredMovies.length > moviesToShowCount;

  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [filterSavedMoviesSearchInput, setFilterSavedMoviesSearchInput] = useState('');
  const [filterSavedMoviesOnlyShortFilms, setFilterSavedMoviesOnlyShortFilms] = useState(false);
  const [isSavedMoviesLoading, setIsSavedMoviesLoading] = useState(false);
  const [savedMoviesToShowCount, setSavedMoviesToShowCount] = useState(getMoviesToShowCount(windowWidth));
  const [savedMoviesToAddCount, setSavedMoviesToAddCount] = useState(getMoviesToAddCount(windowWidth));
  const shownSavedMovies = filteredSavedMovies.slice(0, savedMoviesToShowCount);
  const isMoreSavedMoviesAvailable = filteredSavedMovies.length > savedMoviesToShowCount;

  const moviesWithLiked = shownMovies.map((movie) => {
    movie.liked = false;
    const foundSavedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
    if (foundSavedMovie) {
      movie.liked = true;
      movie._id = foundSavedMovie._id;
    }

    return movie;
  });

  const clearSavedValues = () => {
    setFilterSearchInput('');
    setFilterSavedMoviesSearchInput('');
    setFilterOnlyShortFilms(false);
    setFilterSavedMoviesOnlyShortFilms(false);
    localStorage.removeItem('search_input');
    localStorage.removeItem('is_only_short_films');
  }

  const token = localStorage.getItem('jwt');
  if (!loggedIn && token) {
    setLoggedIn(true);
    mainApi.getMe()
      .then((res) => {
        setCurrentUser({
            name: res.name,
            email: res.email,
        });

        loadMovies();
        loadSavedMovies();
      })
      .catch((err) => {
          console.log(err);
      });
  }

  useEffect(() => {
    const filterMovies = (movies) => {
      setMoviesToShowCount(getMoviesToShowCount(windowWidth));
      return movies.filter((movie) => {
        return (filterSearchInput !== '' && (movie.nameRU.toLowerCase().includes(filterSearchInput) || movie.nameEN.toLowerCase().includes(filterSearchInput)))
            && (! filterOnlyShortFilms || movie.duration <= MOVIE_SHORT_DURATION)
      });
    };

    setFilteredMovies(filterMovies(allMovies));
  }, [allMovies, filterSearchInput, filterOnlyShortFilms, windowWidth]);

  useEffect(() => {
    const filterSavedMovies = (movies) => {
      setSavedMoviesToShowCount(getMoviesToShowCount(windowWidth));
      return movies.filter((movie) => {
        return (filterSavedMoviesSearchInput === '' || (movie.nameRU.toLowerCase().includes(filterSavedMoviesSearchInput) || movie.nameEN.toLowerCase().includes(filterSavedMoviesSearchInput)))
          && (! filterSavedMoviesOnlyShortFilms || movie.duration <= MOVIE_SHORT_DURATION)
      });
    };

    setFilteredSavedMovies(filterSavedMovies(savedMovies));
  }, [savedMovies, filterSavedMoviesSearchInput, filterSavedMoviesOnlyShortFilms, windowWidth]);

  useEffect(() => {
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
          setWindowWidth(window.innerWidth);
          setMoviesToAddCount(getMoviesToAddCount(window.innerWidth));
          setSavedMoviesToAddCount(getMoviesToAddCount(window.innerWidth));
          setMoviesToShowCount(getMoviesToShowCount(window.innerWidth));
          setSavedMoviesToShowCount(getMoviesToShowCount(window.innerWidth));
      }, 10);
    });
  }, []);

  useEffect(() => {
    const searchInputSaved = localStorage.getItem('search_input');
    if (searchInputSaved) {
      setFilterSearchInput(searchInputSaved);
    }
    const isOnlyShortFilmsSaved = localStorage.getItem('is_only_short_films');
    if (isOnlyShortFilmsSaved) {
      setFilterOnlyShortFilms(JSON.parse(isOnlyShortFilmsSaved));
    }
  }, []);

  const handleMoreButtonClick = () => {
    setMoviesToShowCount(moviesToShowCount + moviesToAddCount);
  }

  const handleSavedMoviesMoreButtonClick = () => {
    setSavedMoviesToShowCount(savedMoviesToShowCount + savedMoviesToAddCount);
  }

  const handleSearchSubmit = (searchInput) => {
    loadMovies();
    setFilterSearchInput(searchInput);
    localStorage.setItem('search_input', searchInput);
  }

  const handleSavedMoviesSearchSubmit = (searchInput) => {
    setFilterSavedMoviesSearchInput(searchInput);
  }

  const handleOnlyShortFilmsChanged = (isOnlyShortFilms) => {
    setFilterOnlyShortFilms(isOnlyShortFilms);
    localStorage.setItem('is_only_short_films', JSON.stringify(isOnlyShortFilms));
  };

  const handleSavedMoviesOnlyShortFilmsChanged = (isOnlyShortFilms) => {
    setFilterSavedMoviesOnlyShortFilms(isOnlyShortFilms);
  };

  const handleLogin = (email, password) => {
    mainApi.signIn(email, password)
        .then((res) => {
          if (res.token){
            localStorage.setItem('jwt', res.token);
          }
        })
        .then(() => {
          setLoggedIn(true);
          mainApi.getMe()
              .then((res) => {
                setCurrentUser({
                  name: res.name,
                  email: res.email,
                });

                loadMovies();
                loadSavedMovies();

                navigate('/movies');
              })
              .catch((err) => {
                console.log(err);
              });
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const handleRegister = (name, email, password) => {
    mainApi.signUp(name, email, password)
        .then((res) => {
          handleLogin(email, password);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const handleSignOut = () => {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
        navigate('/');
        clearSavedValues();
  }

  const handleProfileEdit = (name, email) => {
    return mainApi.updateMe(name, email)
        .then((res) => {
          setCurrentUser({
            name: res.name,
            email: res.email,
          });

          return res;
        })
        .catch((err) => {
          console.log(err);

          throw err;
        });
  }

  const loadMovies = () => {
    const savedAllMovies = localStorage.getItem('movies');
    if (savedAllMovies) {
      setAllMovies(JSON.parse(savedAllMovies));
    } else {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          setAllMovies(movies.map((movie) => {
            movie.imageUrl = `${MOVIES_URL}${movie.image.url}`;
            movie.movieId = movie.id;
            return movie;
          }));
          localStorage.setItem('movies', JSON.stringify(movies));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const loadSavedMovies = () => {
    setIsSavedMoviesLoading(true);
    mainApi.getSavedMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies.map((movie) => {
          movie.imageUrl = movie.image;
          movie.id = movie.movieId;

          return movie;
        }));
        setIsSavedMoviesLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleMovieLike = (movie) => {
    mainApi.saveMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${MOVIES_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    })
      .then((savedMovie) => {
        movie._id = savedMovie._id;
        setSavedMovies([...savedMovies, movie]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleMovieUnlike = (movie) => {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((savedMovie) => savedMovie._id !== movie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                    component={Movies}
                    loggedIn={loggedIn}
                    isLoading={isLoading}
                    movies={moviesWithLiked}
                    savedMovies={shownSavedMovies}
                    isMoreMoviesAvailable={isMoreMoviesAvailable}
                    initialSearch={filterSearchInput}
                    initialOnlyShortFilms={filterOnlyShortFilms}
                    onSearchSubmit={handleSearchSubmit}
                    onOnlyShortFilmsChanged={handleOnlyShortFilmsChanged}
                    onMoreButtonClick={handleMoreButtonClick}
                    onLike={handleMovieLike}
                    onUnlike={handleMovieUnlike}
                />
              } />
            <Route
                path="/saved-movies"
                element={
                    <ProtectedRoute
                        component={SavedMovies}
                        loggedIn={loggedIn}
                        isLoading={isSavedMoviesLoading}
                        movies={shownSavedMovies}
                        isMoreMoviesAvailable={isMoreSavedMoviesAvailable}
                        initialSearch={filterSavedMoviesSearchInput}
                        initialOnlyShortFilms={filterSavedMoviesOnlyShortFilms}
                        onSearchSubmit={handleSavedMoviesSearchSubmit}
                        onOnlyShortFilmsChanged={handleSavedMoviesOnlyShortFilmsChanged}
                        onMoreButtonClick={handleSavedMoviesMoreButtonClick}
                        onUnlike={handleMovieUnlike}
                    />}
            />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute
                        component={Profile}
                        loggedIn={loggedIn}
                        onProfileEdit={handleProfileEdit}
                        onSignOut={handleSignOut}
                    />}
            />
            <Route
                path="/signin"
                element={
                    <NotProtectedRoute
                        component={Login}
                        loggedIn={loggedIn}
                        onLogin={handleLogin}
                    />}
            />
            <Route
                path="/signup"
                element={
                    <NotProtectedRoute
                        component={Register}
                        loggedIn={loggedIn}
                        onLogin={handleRegister}
                    />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
  );
}

export default App;



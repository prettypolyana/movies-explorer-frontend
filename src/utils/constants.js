export const BASE_URL = "https://api.pln.movies-explorer.nomoredomains.work";
export const MOVIES_URL = "https://api.nomoreparties.co";

export const SEARCH_INPUT_EMPTY = "Нужно ввести ключевое слово";
export const PROFILE_EDIT_ERROR = "При обновлении профиля произошла ошибка.";
export const PROFILE_EDIT_SUCCESS = "Профиль успешно сохранен.";
export const MOVIES_NOT_FOUND = "Ничего не найдено";

export const messages = {
  GENERAL_REQUEST_ERROR: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
  AUTH_ERROR: "Что-то пошло не так! Попробуйте ещё раз.",
  EMPTY_REQUEST_ERROR: "Нужно ввести ключевое слово",
  NOTHING_FOUND_ERROR: "Ничего не найдено",
};

export const MOVIE_SHORT_DURATION = 40;

export const LARGE_SCREEN_BREAKPOINT = 1200;
export const MEDIUM_SCEEEN_BREAKPOINT = 767;
export const MOVIES_TO_SHOW_COUNT_LARGE_SCREEN = 12;
export const MOVIES_TO_SHOW_COUNT_MEDIUM_SCREEN = 8;
export const MOVIES_TO_SHOW_COUNT_SMALL_SCREEN = 5;
export const MOVIES_TO_ADD_COUNT_LARGE_SCREEN = 3;
export const MOVIES_TO_ADD_COUNT_MEDIUM_SCREEN = 2;

export const EMAIL_PATTERN = '^(?=.{1,60}$)\S+@(?:[\w-]+\.)+[\w-]{2,5}$';

export const paths = {
  main: "/",
  movies: "/movies",
  savedMovies: "/saved-movies",
  profile: "/profile",
  signUp: "/signup",
  signIn: "/signin",
};

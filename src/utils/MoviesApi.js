import {MOVIES_URL} from './constants';

class MoviesApi {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            method: "GET",
            headers: this._headers,
        }).then(this._checkResponse);
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: MOVIES_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

import {BASE_URL} from './constants';

class MainApi {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    signUp(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        }).then(this._checkResponse);
    }

    signIn(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                email,
                password,
            }),
        }).then(this._checkResponse);
    }

    getMe() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: this._getHeaders(),
        }).then(this._checkResponse);
    }

    updateMe(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._getHeaders(),
            body: JSON.stringify({
                name,
                email,
            }),
        }).then(this._checkResponse);
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: "GET",
            headers: this._getHeaders(),
        }).then(this._checkResponse);
    }

    saveMovie({country,
               director,
               duration,
               year,
               description,
               image,
               trailerLink,
               nameRU,
               nameEN,
               thumbnail,
               movieId}) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: this._getHeaders(),
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                nameRU,
                nameEN,
                thumbnail,
                movieId,
            }),
        }).then(this._checkResponse);
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: "DELETE",
            headers: this._getHeaders(),
        }).then(this._checkResponse);
    }

    _getHeaders() {
        const jwt = localStorage.getItem("jwt");
        const headers = this._headers;
        headers.Authorization = `Bearer ${jwt}`;
        return headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const mainApi = new MainApi({
    baseUrl: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

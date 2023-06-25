import { useState, useEffect } from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import {useFormWithValidation} from '../../utils/hooks';
import {SEARCH_INPUT_EMPTY, MOVIES_NOT_FOUND} from '../../utils/constants';

function SearchForm({initialSearch, initialOnlyShortFilms, onSearchSubmit, onOnlyShortFilmsChanged, isMoviesNotFound}) {
    const { values, isValid, handleChange, resetForm } = useFormWithValidation();

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (initialSearch) {
            resetForm({search_input: initialSearch}, {}, true);
        }
    }, [initialSearch, resetForm]);

    const onFormSubmit = (event) => {
        event.preventDefault();

        onSearchSubmit(values.search_input);
    };

    useEffect(() => {
        if (! isValid || isMoviesNotFound) {
            setShowError(true);
        } else {
            setShowError(false);
        }
        if (! isValid) {
            setErrorMessage(SEARCH_INPUT_EMPTY);
        } else if (isMoviesNotFound) {
            setErrorMessage(MOVIES_NOT_FOUND);
        } else {
            setErrorMessage("");
        }
    }, [isValid, isMoviesNotFound]);

    return (
        <section className="search">
            <form onSubmit={onFormSubmit}>
                <fieldset className="search__form">
                    <input name="search_input" minLength="1" required className="search__input" placeholder="Фильм" value={values.search_input || ''} onChange={handleChange} />
                    <button className="search__button" />
                </fieldset>
                {
                    showError ? <span className="search__error">{errorMessage}</span> : ''
                }
            </form>
            <FilterCheckbox initialOnlyShortFilms={initialOnlyShortFilms} onOnlyShortFilmsChanged={onOnlyShortFilmsChanged} />
        </section>
    )
}

export default SearchForm;
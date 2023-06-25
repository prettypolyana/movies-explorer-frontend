import {useRef} from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({initialOnlyShortFilms, onOnlyShortFilmsChanged}) {
    const checkboxRef = useRef();

    const handleCheckboxChange = () => {
        onOnlyShortFilmsChanged(checkboxRef.current.checked);
    };

    return (
        <section className="filter">
            <input ref={checkboxRef} id="short_movies" type="checkbox" className="filter__checkbox-input" checked={initialOnlyShortFilms} onChange={handleCheckboxChange} />
            <label htmlFor="short_movies" className="filter__checkbox">
                Короткометражки
            </label>
        </section>
    )
}

export default FilterCheckbox;
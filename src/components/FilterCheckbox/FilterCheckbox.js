import {useRef, useState} from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({initialOnlyShortFilms, onOnlyShortFilmsChanged}) {
    const [checked, setChecked] = useState(initialOnlyShortFilms);
    const checkboxRef = useRef();

    const handleCheckboxChange = () => {
        onOnlyShortFilmsChanged(checkboxRef.current.checked);
        setChecked(checkboxRef.current.checked);
    };

    return (
        <section className="filter">
            <input ref={checkboxRef} id="short_movies" type="checkbox" className="filter__checkbox-input" checked={checked} onChange={handleCheckboxChange} />
            <label htmlFor="short_movies" className="filter__checkbox">
                Короткометражки
            </label>
        </section>
    )
}

export default FilterCheckbox;
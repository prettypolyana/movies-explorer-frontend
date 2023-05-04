import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <section className="filter">
            <input id="short_movies" type="checkbox" className="filter__checkbox-input" />
            <label for="short_movies" className="filter__checkbox">
                Короткометражки
            </label>
        </section>
    )
}

export default FilterCheckbox;
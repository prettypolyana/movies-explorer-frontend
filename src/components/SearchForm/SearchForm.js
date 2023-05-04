import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className="search">
            <div className="search__form">
                <input className="search__input" placeholder="Фильм"/>
                <button className="search__button" />
            </div>
            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;
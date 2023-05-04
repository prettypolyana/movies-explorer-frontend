import { Link } from "react-router-dom";
import React, { useState } from "react";

import "./BurgerMenu.css";

function BurgerMenu() {
    const [burgerMenuOpened, setBurgerMenuOpened] = useState(false);

    const handleBurgerMenuClick = () => {
        setBurgerMenuOpened(!burgerMenuOpened);
    }

    return (
        <>
            <div className={`burger__overlay ${burgerMenuOpened ? 'burger__overlay_opened' : ''}`} />
            <div className={`burger__content ${burgerMenuOpened ? 'burger__content_opened' : ''}`}>
                <nav className="burger__menu">
                    <ul className="burger__menu-items">
                        <li className="burger__menu-item">
                            <Link className="burger__menu-link" to="/">Главная</Link>
                        </li>
                        <li className="burger__menu-item">
                            <Link className="burger__menu-link burger__menu-link_main" to="/movies">Фильмы</Link>
                        </li>
                        <li className="burger__menu-item">
                            <Link className="burger__menu-link" to="/saved-movies">Сохранённые фильмы</Link>
                        </li>
                    </ul>
                </nav>
                <Link className="burger__profile-link" to="/profile">Аккаунт</Link>
            </div>
            <button className={`burger__burger-button ${burgerMenuOpened ? 'burger__burger-button_opened' : ''}`} onClick={handleBurgerMenuClick}>
                <div className={`burger__burger-icon ${burgerMenuOpened ? 'burger__burger-icon_opened' : ''}`}></div>
            </button>
        </>
    )
}

export default BurgerMenu;
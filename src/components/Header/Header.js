import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo-header.svg";

import "./Header.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({loggedIn}) {
    const location = useLocation();
    
    return (
        <>
            <header className={`header ${loggedIn ? 'header_logged-in' : ''}`}>
                <Link to="/" className="header__logo">
                    <img className="header__logo-img" alt="Логотип" src={logo}/>
                </Link>
                {
                    loggedIn ? (
                        <>
                            <nav className="header__menu">
                                <ul className="header__menu-items">
                                    <li className="header__menu-item">
                                        <Link className={`header__menu-item-link ${location.pathname === '/movies' ? 'header__menu-item-link_main' : ''}`} to="/movies">Фильмы</Link>
                                    </li>
                                    <li className="header__menu-item">
                                        <Link className={`header__menu-item-link ${location.pathname === '/saved-movies' ? 'header__menu-item-link_main' : ''}`} to="/saved-movies">Сохранённые фильмы</Link>
                                    </li>
                                </ul>
                            </nav>
                            <Link className="header__account-button" to="/profile">Аккаунт</Link>
                        </>
                    ) : (
                        <ul className="header__auth-buttons-items">
                            <li>
                                <Link to="/signup" className="header__auth-buttons-item">Регистрация</Link>
                            </li>
                            <li>
                                <Link to="/signin" className="header__entrance-buttons-item">Войти</Link>
                            </li>
                        </ul>
                    )
                }
            </header>
            {
                loggedIn ? (
                    <BurgerMenu />
                ) : ''
            }
        </>
    )
}

export default Header;
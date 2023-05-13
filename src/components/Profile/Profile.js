import React, { useState } from 'react';

import './Profile.css'
import '../App/App.css';

import Header from '../Header/Header';

function Profile({onLogout}) {
    const currentUser = {
        name: 'Виталий',
        email: 'pochta@yandex.ru',
    };
    const [name, setName] = useState(currentUser.name || '');
    const [email, setEmail] = useState(currentUser.email || '');
    const [editing, setEditing] = useState(false);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleNameInput = (event) => {
        setName(event.target.value);
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setEditing(false);
    }

    return (
        <>
            <Header />
            <main>
                <form className="profile" onSubmit={handleSubmit}>
                    <h1 className="profile__header">Привет, {currentUser.name}!</h1>
                    <div className="profile__container">
                        <div className="profile__elements">
                            <div className="profile__item">
                                <p className="profile__item-label">Имя</p>
                                {
                                    editing
                                    ? <input type="name" className="profile__input" value={name} placeholder="Имя" onChange={handleNameInput} />
                                    : <p className="profile__item-value">{name}</p>
                                }
                            </div>
                            <div className="profile__item">
                                <p className="profile__item-label">E-mail</p>
                                {
                                    editing
                                    ? <input type="email" className="profile__input profile__border" value={email} placeholder="E-mail" onChange={handleEmailInput} />
                                    : <p className="profile__item-value">{email}</p>
                                }
                                
                            </div>
                        </div>
                        {
                            editing
                            ? (
                                <div className="profile__actions">
                                    <p className="profile__error">При обновлении профиля произошла ошибка.</p>
                                    <button type="submit" className="profile__button-save">Сохранить</button>
                                </div>
                            ) : (
                                <div className="profile__actions">
                                    <button className="profile__button-edit" onClick={handleEditClick}>Редактировать</button>
                                    <button type="button" className="profile__exit" onClick={onLogout}>
                                        Выйти из аккаунта
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </form>
            </main>
        </>
    )
}

export default Profile;
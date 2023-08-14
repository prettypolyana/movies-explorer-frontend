import React, {useState, useContext, useEffect} from 'react';

import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {PROFILE_EDIT_ERROR, PROFILE_EDIT_SUCCESS, EMAIL_PATTERN} from '../../utils/constants';

import './Profile.css'
import '../App/App.css';

import Header from '../Header/Header';
import {useFormWithValidation} from "../../utils/hooks";

function Profile({loggedIn, onProfileEdit, onSignOut, errorMessage, successMessage}) {
    const currentUserContext = useContext(CurrentUserContext);

    const { values, isValid, handleChange, resetForm } = useFormWithValidation();

    const [editing, setEditing] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [canSave, setCanSave] = useState(false);

    useEffect(() => {
        resetForm({
            name: currentUserContext?.name || '',
            email: currentUserContext?.email || '',
        });
    }, [editing, currentUserContext, resetForm])

    const handleEditClick = () => {
        setEditing(true);
    };

    useEffect(() => {
        setCanSave(currentUserContext && (currentUserContext.name !== values.name || currentUserContext.email !== values.email));
    }, [values, currentUserContext]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (! canSave) {
            return;
        }
        onProfileEdit(values.name, values.email)
            .then(() => {
                setEditing(false);
                setShowError(false);
                setShowSuccess(true);
            })
            .catch(() => {
                setShowError(true);
                setShowSuccess(false);
            });
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <form className="profile" onSubmit={handleSubmit}>
                    <h1 className="profile__header">Привет, {currentUserContext?.name || ''}!</h1>
                    <div className="profile__container">
                        <div className="profile__elements">
                            <div className="profile__item">
                                <p className="profile__item-label">Имя</p>
                                {
                                    editing
                                    ? <input type="name" name="name" className="profile__input" value={values.name || ''} required placeholder="Имя" onChange={handleChange} />
                                    : <p className="profile__item-value">{currentUserContext?.name || ''}</p>
                                }
                            </div>
                            <div className="profile__item">
                                <p className="profile__item-label">E-mail</p>
                                {
                                    editing
                                    ? <input type="text" pattern={EMAIL_PATTERN} name="email" className="profile__input profile__border" required value={values.email || ''} placeholder="E-mail" onChange={handleChange} />
                                    : <p className="profile__item-value">{currentUserContext?.email || ''}</p>
                                }
                            </div>
                        </div>
                        {
                            editing
                            ? (
                                <div className="profile__actions">
                                    <p className="profile__error">{showError ? PROFILE_EDIT_ERROR : ''}</p>
                                    <button type="submit" className={`profile__button-save ${isValid && canSave ? '' : 'profile__button-save_disabled'}`} disabled={!isValid || !canSave}>Сохранить</button>
                                </div>
                            ) : (
                                <div className="profile__actions">
                                    <p className="profile__success">{showSuccess ? PROFILE_EDIT_SUCCESS : ''}</p>
                                    <button className="profile__button-edit" onClick={handleEditClick}>Редактировать</button>
                                    <button type="button" className="profile__exit" onClick={onSignOut}>
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
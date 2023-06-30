import './Register.css';

import AuthForm from '../AuthForm/AuthForm';
import {useFormWithValidation} from "../../utils/hooks";
import { useEffect } from 'react';

import {EMAIL_PATTERN} from '../../utils/constants';

function Register({onRegister, errorMessage, onLeave}) {
    const { values, errors, isValid, handleChange } = useFormWithValidation();

    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister(values.name, values.email, values.password);
    };

    useEffect(() => {
        return () => {
            onLeave();
        }
    }, []);

    return (
        <AuthForm
            title="Добро пожаловать!"
            onSubmit={handleSubmit}
            buttonText="Зарегистрироваться"
            formSubtext="Уже зарегистрированы?"
            formSublink="/signin"
            formSublinkText="Войти"
            isValid={isValid}
            errorMessage={errorMessage}
        >
            <fieldset className="auth-form__input-field">
                <label htmlFor="name" className="auth-form__input-label">Имя</label>
                <input name="name" className={`auth-form__input ${errors.name ? 'auth-form__input_invalid' : ''}`} required minLength={2} maxLength={30} onChange={handleChange}/>
                <span className="auth-form__input-error">{errors.name}</span>
            </fieldset>
            <fieldset className="auth-form__input-field">
                <label htmlFor="email" className="auth-form__input-label">E-mail</label>
                <input type="text" pattern={EMAIL_PATTERN} name="email" className={`auth-form__input ${errors.email ? 'auth-form__input_invalid' : ''}`} required onChange={handleChange}/>
                <span className="auth-form__input-error">{errors.email}</span>
            </fieldset>
            <fieldset className="auth-form__input-field">
                <label htmlFor="password" className="auth-form__input-label">Пароль</label>
                <input type="password" name="password" className={`auth-form__input ${errors.password ? 'auth-form__input_invalid' : ''}`} required onChange={handleChange}/>
                <span className="auth-form__input-error">{errors.password}</span>
            </fieldset>
        </AuthForm>
    )
}

export default Register;
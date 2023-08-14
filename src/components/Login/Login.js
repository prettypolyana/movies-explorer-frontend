import {useEffect} from 'react';

import './Login.css'
import AuthForm from '../AuthForm/AuthForm';
import {useFormWithValidation} from "../../utils/hooks";

import {EMAIL_PATTERN} from '../../utils/constants';

function Login({onLogin, errorMessage, onLeave}) {
    const { values, errors, isValid, handleChange } = useFormWithValidation();

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(values.email, values.password);
    };

    useEffect(() => {
        return () => {
            onLeave();
        }
    }, []);

    return (
        <AuthForm
            title="Рады видеть!"
            onSubmit={handleSubmit}
            buttonText="Войти"
            formSubtext="Ещё не зарегистрированы?"
            formSublink="/signup"
            formSublinkText="Регистрация"
            isValid={isValid}
            errorMessage={errorMessage}
        >
            <fieldset className="auth-form__input-field">
                <label htmlFor="email" className="auth-form__input-label">E-mail</label>
                <input type="text" pattern={EMAIL_PATTERN} name="email" className={`auth-form__input ${errors.email ? 'auth-form__input_invalid' : ''}`} required onChange={handleChange} />
                <span className="auth-form__input-error">{errors.email}</span>
            </fieldset>
            <fieldset className="auth-form__input-field">
                <label htmlFor="password" className="auth-form__input-label">Пароль</label>
                <input type="password" name="password" className={`auth-form__input ${errors.password ? 'auth-form__input_invalid' : ''}`} required onChange={handleChange} />
                <span className="auth-form__input-error">{errors.password}</span>
            </fieldset>
        </AuthForm>
    )
}

export default Login;
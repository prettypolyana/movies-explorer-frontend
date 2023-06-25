import './Login.css'
import AuthForm from '../AuthForm/AuthForm';
import {useFormWithValidation} from "../../utils/hooks";

function Login({onLogin}) {
    const { values, errors, isValid, handleChange } = useFormWithValidation();

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(values.email, values.password);
    };

    return (
        <AuthForm
            title="Рады видеть!"
            onSubmit={handleSubmit}
            buttonText="Войти"
            formSubtext="Ещё не зарегистрированы?"
            formSublink="/signup"
            formSublinkText="Регистрация"
            isValid={isValid}
        >
            <fieldset className="auth-form__input-field">
                <label htmlFor="email" className="auth-form__input-label">E-mail</label>
                <input type="email" name="email" className={`auth-form__input ${errors.email ? 'auth-form__input_invalid' : ''}`} required onChange={handleChange} />
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
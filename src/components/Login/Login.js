import './Login.css'
import AuthForm from '../AuthForm/AuthForm';

function Login({onLogin}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin();
    };

    return (
        <AuthForm
            title="Рады видеть!"
            onSubmit={handleSubmit}
            buttonText="Войти"
            formSubtext="Ещё не зарегистрированы?"
            formSublink="/signup"
            formSublinkText="Регистрация"
        >
            <fieldset className="auth-form__input-field">
                <label htmlFor="email" className="auth-form__input-label">E-mail</label>
                <input type="email" name="email" className="auth-form__input" />
            </fieldset>
            <fieldset className="auth-form__input-field">
                <label htmlFor="password" className="auth-form__input-label">Пароль</label>
                <input type="password" name="password" className="auth-form__input auth-form__input_invalid" />
                <span className="auth-form__input-error">Что-то пошло не так...</span>
            </fieldset>
        </AuthForm>
    )
}

export default Login;
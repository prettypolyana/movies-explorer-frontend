import './Register.css';

import AuthForm from '../AuthForm/AuthForm';

function Register({onRegister}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister();
    };

    return (
        <AuthForm
            title="Добро пожаловать!"
            onSubmit={handleSubmit}
            buttonText="Зарегистрироваться"
            formSubtext="Уже зарегистрированы?"
            formSublink="/signin"
            formSublinkText="Войти"
        >
            <fieldset className="auth-form__input-field">
                <label htmlFor="name" className="auth-form__input-label">Имя</label>
                <input name="name" className="auth-form__input" />
            </fieldset>
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

export default Register;
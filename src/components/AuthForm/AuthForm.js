import { Link } from 'react-router-dom';
import './AuthForm.css'
import '../App/App.css';
import logo from '../../images/logo-header.svg';

function AuthForm({title, children, onSubmit, buttonText, formSubtext, formSublink, formSublinkText, isValid, errorMessage}) {
    return (
        <section className="auth-form">
            <Link to="/" className="header__logo">
                <img className="auth-form__logo" src={logo} alt="Логотип" />
            </Link>
            <h1 className="auth-form__title">{title}</h1>
            <form className="auth-form__form-container" onSubmit={onSubmit}>
                <div className="auth-form__fields">
                    {children}
                </div>
                <div className="auth-form__actions">
                    <p className="auth-form__error">{errorMessage}</p>
                    <button className={`auth-form__button ${isValid ? '' : 'auth-form__button_disabled'} ` } disabled={!isValid}>{buttonText}</button>
                    <p className="auth-form__subtext">
                        {formSubtext}
                        <Link className="auth-form__link" to={formSublink}>{formSublinkText}</Link>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default AuthForm;

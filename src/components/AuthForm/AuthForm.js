import { Link } from 'react-router-dom';
import './AuthForm.css'
import '../App/App.css';
import logo from '../../images/logo-header.svg';

function AuthForm({title, children, onSubmit, buttonText, formSubtext, formSublink, formSublinkText}) {
    return (
        <section className="auth-form">
            <img className="auth-form__logo" src={logo} alt="Логотип" />
            <h1 className="auth-form__title">{title}</h1>
            <form className="auth-form__form-container" onSubmit={onSubmit}>
                <div className="auth-form__fields">
                    {children}
                </div>
                <div className="auth-form__actions">
                    <button className="auth-form__button auth-form__button-help">{buttonText}</button>
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

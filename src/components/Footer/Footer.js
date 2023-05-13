import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__text">
            Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className="footer__container">
                <p className="footer__copyright">&copy; 2023</p>
                <div className="footer__links">
                    <a className="footer__link" href="/">Яндекс Практикум</a>
                    <a className="footer__link" href="/">Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
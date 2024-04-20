import { useTranslation } from "react-i18next"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";
export default function SiteNav() {

    let { t, i18n } = useTranslation()

    let handleLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <Navbar expand="lg">
            <Container>
                <img src={logo} alt="Icon" style={{ width: '50px' }} />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className={`${i18n.language === 'en' ? "me-auto" : "ms-auto"} ms-4 my-2 my-lg-0`}>
                        <NavLink to="/" className="mx-4 nav-link link-offset-3 ">{t('home')}</NavLink>
                        <NavLink to="/about" className="mx-4 nav-link link-offset-3 ">{t('about_us')}</NavLink>
                        <NavLink to="/faq" className="mx-4 nav-link link-offset-3 ">{t('faq')}</NavLink>
                        <NavLink to="/contact" className="mx-4 nav-link link-offset-3 ">{t('contact_us')}</NavLink>
                    </Nav>
                    <NavDropdown title={`${i18n.language}`} className="text-center">
                        <NavDropdown.Item href="#" onClick={() => handleLanguage('en')}>English</NavDropdown.Item>
                        <NavDropdown.Item href="#" onClick={() => handleLanguage('ar')}>عربى</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


import icon_transparent from "../assets/logo.png"
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom";


export default function Footer() {
    let { t } = useTranslation()

    return (
        <div id="footer">
            <div className="footer_logo">
                <img src={icon_transparent} alt="Icon" style={{ width: '50px' }} />
                <div className="logo_text_box">
                    <p>{t('footer_tip')}</p>
                </div>
            </div>
            <div className="footer_nav">
                <div className="footer_nav_links flex-wrap">
                    <NavLink to="/" className="w-50 nav-link link-offset-3 ">{t('home')}</NavLink>
                    <NavLink to="/about" className="w-50 nav-link link-offset-3 ">{t('about_us')}</NavLink>
                    <NavLink to="/contact" className="w-50 nav-link link-offset-3 ">{t('contact_us')}</NavLink>
                    <NavLink to="/faq" className="w-50 nav-link link-offset-3 ">{t('faq')}</NavLink>
                </div>
            </div>
            <div className="footer_socials">
                <form>
                    <input type="text" placeholder={t("email_placeholder")} />
                    <FaRegEnvelope className="footer_input_icon" />
                    <button className="primary_btn">{t('subscribe')}</button>
                </form>
                <div className="social_icons">
                    <a href="https://www.facebook.com/share/9GhxBNuZJ8rPCQyQ/?mibextid=A7sQZp">
                        <FaFacebookF className="social_icon" />
                    </a>
                    <a href="#">
                        <FaTwitter className="social_icon" />
                    </a>
                    <a href="https://www.instagram.com/ticket_route?igsh=MW1oNmQ1ZTI2bWFwOA==">
                        <FaInstagram className="social_icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

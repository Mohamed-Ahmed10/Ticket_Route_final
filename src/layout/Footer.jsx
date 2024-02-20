
import icon_transparent from "../assets/logo/icon_transparent.png"
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"


export default function Footer() {
    let { t } = useTranslation()

    return (
        <div id="footer">
            <div className="footer_logo">
                <img src={icon_transparent} alt="Icon" style={{ width: '50px' }} />
                <div className="logo_text_box">
                    <p>Book cheap trips on out partnats</p>
                    <p> and you’re ready to go</p>
                </div>
            </div>
            <div className="footer_nav">
                <div className="footer_nav_links flex-wrap">
                    <Link to="/" className="w-50 nav-link link-offset-3 ">{t('home')}</Link>
                    <Link to="/about" className="w-50 nav-link link-offset-3 ">{t('about_us')}</Link>
                    <Link to="/contact_us" className="w-50 nav-link link-offset-3 ">{t('contact_us')}</Link>
                    <Link to="/faq" className="w-50 nav-link link-offset-3 ">{t('faq')}</Link>
                </div>
            </div>
            <div className="footer_socials">
                <form>
                    <input type="text" placeholder="Enter your email address" />
                    <FaRegEnvelope className="footer_input_icon" />
                    <button className="primary_btn">subscribe</button>
                </form>
                <div className="social_icons">
                    <a href="#">
                        <FaFacebookF className="social_icon" />
                    </a>
                    <a href="#">
                        <FaTwitter className="social_icon" />
                    </a>
                    <a href="#">

                        <FaInstagram className="social_icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

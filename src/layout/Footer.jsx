
import icon_transparent from "../assets/logo/icon_transparent.png"
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";




export default function Footer() {
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
                <div className="footer_nav_links">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                </div>
                <div className="footer_nav_links">
                    <a href="/">Contact Us</a>
                    <a href="/about">F&QS</a>
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

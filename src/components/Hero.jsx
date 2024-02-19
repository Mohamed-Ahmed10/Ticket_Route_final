import { useTranslation } from "react-i18next";
import Container from 'react-bootstrap/Container';
import { PiPaperPlaneTilt } from "react-icons/pi";
import heroImg from '../assets/header_image.png'
import BookingSection from "./BookingSection";
import Statistics from "./Statistics";


function Hero() {
    let { t } = useTranslation()
    return (
        <Container>

            <section id="hero_section">
                <div className="background_box"></div>

                <div className="hero_text_box">
                    <p className="d-flex align-items-center gap-2" ><PiPaperPlaneTilt style={{ color: '#2582C0' }} /> {t('her_sup_p')}</p>
                    <h1 className="bold" >
                        <p>
                            {t('hero_heading')}
                        </p>
                        <p>
                            {t('hero_heading2')}
                        </p>
                    </h1>
                    <p className="hero_p">
                        {t('hero_p')}
                    </p>
                </div>
                <div className="hero_image_box">
                    <div className="hero_image">
                        <img src={heroImg} alt="aero plane" />
                    </div>
                </div>
            </section>
            <div>
                <BookingSection />
            </div>
            <div>
                <Statistics />
            </div>
        </Container>
    )
}

export default Hero
/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { PiPaperPlaneTilt } from "react-icons/pi";
import BookingSection from "./BookingSection";
import Statistics from "./Statistics";


function Hero({ trip_status }) {
    let { t } = useTranslation()
    return (
        <div className={`hero ${trip_status}`}>
            <div className="background_box"></div>
            <section id="hero_section">
                <div className="hero_text_box mt-3">
                    <p className="d-flex align-items-center gap-2" >
                        <PiPaperPlaneTilt style={{ color: '#2582C0' }} /> {t('her_sup_p')}</p>
                    <h3 className="bold" >
                        {t('hero_heading')} <br />
                        {t('hero_heading2')}
                    </h3>
                    <p className="hero_p w-75">
                        {t('hero_p')}
                    </p>
                </div>
            </section>
            <BookingSection trip_status={trip_status} />
            <Statistics />
        </div>
    )
}

export default Hero
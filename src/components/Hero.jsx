import { useTranslation } from "react-i18next"


function Hero() {
    let { t } = useTranslation()
    return (
        <div>
            <p>{t('her_sup_p')}</p>
            <h1>{t('hero_heading')}</h1>
            <p>
                {t('hero_p')}
            </p>
        </div>
    )
}

export default Hero
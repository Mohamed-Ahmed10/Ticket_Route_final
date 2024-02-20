import { useTranslation } from "react-i18next"

const Statistics = () => {
    let { t } = useTranslation()
    return (
        <div className="stats_container mt-3">
            <div className="stats_box">
                <h3>
                    951<span>K+</span>
                </h3>
                <p>{t('successful_booked')}</p>
                <p>{t('tickets_in_egypt')}</p>
            </div>
            <div className="stats_box">
                <h3>
                    300<span>K+</span>
                </h3>
                <p>{t('everyday_clients')}</p>
                <p>{t('that_trust_us')}</p>
            </div>
            <div className="stats_box">
                <h3>
                    815<span>K+</span>
                </h3>
                <p>{t('happy_clients_by')}</p>
                <p>{t('our_services')}</p>
            </div>
        </div>
    )
}

export default Statistics
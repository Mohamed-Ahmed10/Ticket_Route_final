import { useTranslation } from "react-i18next"

export default function SiteNav() {

    let { t } = useTranslation()
    return (
        <div>
            {t('site_nav')}
        </div>
    )
}

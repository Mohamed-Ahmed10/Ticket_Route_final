import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { IoStarOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";


export default function Search() {
    let { t } = useTranslation()
    return (
        <Container className="mt-4 search_view">
            <div className="d-flex justify-content-between align-content-center">
                <div className="left">
                    <div className='trip_type'>
                        <button className='secondary_btn'>{t('one_way')}</button>
                        <button className='secondary_btn'>{t('round_trip')}</button>
                    </div>
                </div>
                <div className="right">
                    <div className='forms_menu' >
                        <select name="" id="">
                            <option value="1 Adult">1Adult</option>
                        </select>
                        <select name="" id="">
                            <option value="Economy">{t('economy')}</option>
                        </select>
                        <select name="" id="">
                            <option value="Payment Type">{t('payment_type')}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='inputs_block d-flex'>
                <div className='input_container d-flex flex-column p-2'>
                    <label className="fw-bold">{t('from')}</label>
                    <input type="text" placeholder={t("enter_your_location")} />
                </div>
                <div className='input_container d-flex flex-column border-start p-2'>
                    <label className="fw-bold">{t('to')}</label>
                    <input type="text" placeholder={t("enter_your_destination")} />
                </div>
                <div className='input_container d-flex flex-column border-start p-2'>
                    <label className="fw-bold">{t('departure')}</label>
                    <input type="text" placeholder={t("pick_departure_date")} />
                </div>
                <div className='input_container d-flex flex-column border-start p-2'>
                    <label className="fw-bold">{t('return')}</label>
                    <input type="text" placeholder={t("pick_return_date")} />
                </div>
            </div>
            <hr className="my-4"/>
            <div className="d-flex filter_parent">
                <div className="flex-fill d-flex filter p-2 active">
                    <IoStarOutline />
                    <div>
                        <b>{t('recommended')}</b>
                        <div className="price">5252</div>
                    </div>
                </div>
                <div className="flex-fill d-flex filter p-2">
                    <BsCurrencyDollar />

                    <div>
                        <b>{t('cheapest')}</b>
                        <div className="price">5252</div>
                    </div>
                </div>
                <div className="flex-fill d-flex filter p-2">
                    <SiMinutemailer />
                    <div>
                        <b>{t('fastest')}</b>
                        <div className="price">5252</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

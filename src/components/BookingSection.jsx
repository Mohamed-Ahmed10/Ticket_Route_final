import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { IoAirplaneOutline } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { PiTrain } from "react-icons/pi";
import { Link } from 'react-router-dom';


function BookingSection() {
    const [activeTap, setActiveTap] = useState("flight")
    let { t } = useTranslation();


    return (
        <div className='tabs'>
            <div className='tap_buttons_container'>
                <button className={`${activeTap == 'flight' ? "active_button" : ''} `} onClick={() => setActiveTap('flight')} id='flight'>
                    <IoAirplaneOutline className={`${activeTap == 'flight' ? 'active_icon' : ''} me-1`} />
                    {t('flight_tab')}
                </button>
                <button className={`${activeTap == 'bus' ? "active_button" : ''}`} onClick={() => setActiveTap('bus')} id='bus'>
                    <TbBus className={`${activeTap == 'bus' ? 'active_icon' : ''} me-1`} />
                    {t('bus_tab')}
                </button>

                <button className={`${activeTap == 'train' ? "active_button" : ''} `} onClick={() => setActiveTap('train')} id='train'>
                    <PiTrain className={`${activeTap == 'train' ? 'active_icon' : ''} me-1`} />
                    {t('train_tab')}
                </button>
            </div>
            {activeTap === 'flight' && (
                <div className='booking_box'>
                    <form action="">
                        <div className='trip_type'>
                            <button className='secondary_btn'>{t('one_way')}</button>
                            <button className='secondary_btn'>{t('round_trip')}</button>
                        </div>
                        <div className='inputs_block d-flex'>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('from')}</label>
                                <input type="text" placeholder='enter your location' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('to')}</label>
                                <input type="text" placeholder='enter your destination' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('departure')}</label>
                                <input type="text" placeholder='pick departure date' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('return')}</label>
                                <input type="text" placeholder='pick return date' />
                            </div>
                        </div>
                        <div className='actions_block'>
                            <div className='checkbox_container'>
                                <input className="form-check-input mt-0" id="direct" type="checkbox" value="" />
                                <label htmlFor="direct">{t('direct_trips')}</label>
                            </div>
                            <div className='forms_menu' >
                                {/* <select name="" id="">
                                    <option value="1 Adult">1Adult</option>
                                </select> */}
                                <select name="" id="">
                                    <option value="Economy">{t('economy')}</option>
                                </select>
                                <select name="" id="">
                                    <option value="Payment Type">{t('payment_type')}</option>
                                </select>
                                <Link className='submit_booking primary_btn link-underline link-underline-opacity-0' to="/search">{t('search')}</Link>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {activeTap === 'bus' && (
                <div className='booking_box'>
                    <form action="">
                        <div className='trip_type'>
                            <button className='secondary_btn'>{t('one_way')}</button>
                            <button className='secondary_btn'>{t('round_trip')}</button>
                        </div>
                        <div className='inputs_block d-flex'>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('from')}</label>
                                <input type="text" placeholder='enter your location' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('to')}</label>
                                <input type="text" placeholder='enter your destination' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('departure')}</label>
                                <input type="text" placeholder='pick departure date' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('return')}</label>
                                <input type="text" placeholder='pick return date' />
                            </div>
                        </div>
                        <div className='actions_block'>
                            <div className='checkbox_container'>
                                <input className="form-check-input mt-0" id="direct" type="checkbox" value="" />
                                <label htmlFor="direct">{t('direct_trips')}</label>
                            </div>
                            <div className='forms_menu' >
                                {/* <select name="" id="">
                                <option value="1 Adult">1Adult</option>
                            </select> */}
                                <select name="" id="">
                                    <option value="Economy">{t('economy')}</option>
                                </select>
                                <select name="" id="">
                                    <option value="Payment Type">{t('payment_type')}</option>
                                </select>
                                <button className='submit_booking primary_btn'>{t('search')}</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {activeTap === 'train' && (
                <div className='booking_box'>
                    <form action="">
                        <div className='trip_type'>
                            <button className='secondary_btn'>{t('one_way')}</button>
                            <button className='secondary_btn'>{t('round_trip')}</button>
                        </div>
                        <div className='inputs_block d-flex'>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('from')}</label>
                                <input type="text" placeholder='enter your location' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('to')}</label>
                                <input type="text" placeholder='enter your destination' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('departure')}</label>
                                <input type="text" placeholder='pick departure date' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">{t('return')}</label>
                                <input type="text" placeholder='pick return date' />
                            </div>
                        </div>
                        <div className='actions_block'>
                            <div className='checkbox_container'>
                                <input className="form-check-input mt-0" id="direct" type="checkbox" value="" />
                                <label htmlFor="direct">{t('direct_trips')}</label>
                            </div>
                            <div className='forms_menu' >
                                {/* <select name="" id="">
                                <option value="1 Adult">1Adult</option>
                            </select> */}
                                <select name="" id="">
                                    <option value="Economy">{t('economy')}</option>
                                </select>
                                <select name="" id="">
                                    <option value="Payment Type">{t('payment_type')}</option>
                                </select>
                                <button className='submit_booking primary_btn'>{t('search')}</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>

    )
}

export default BookingSection
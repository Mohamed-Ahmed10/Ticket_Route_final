import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { IoAirplaneOutline } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { PiTrain } from "react-icons/pi";


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
                            <button className='secondary_btn'>One way</button>
                            <button className='secondary_btn'>Round Trip</button>
                            <button className='secondary_btn'>Multi-city</button>
                        </div>
                        <div className='inputs_block d-flex'>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">From</label>
                                <input type="text" placeholder='enter your location' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">To</label>
                                <input type="text" placeholder='enter your destination' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">Departure</label>
                                <input type="text" placeholder='pick departure date' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">Return</label>
                                <input type="text" placeholder='pick return date' />
                            </div>
                        </div>
                        <div className='actions_block'>
                            <div className='checkbox_container'>
                                <input className="form-check-input mt-0" type="checkbox" value="" />
                                <label htmlFor=""> Direct Trips</label>
                            </div>
                            <div className='forms_menu' >
                                <select name="" id="">
                                    <option value="1 Adult">1Adult</option>
                                </select>
                                <select name="" id="">
                                    <option value="Economy">Economy</option>
                                </select>
                                <select name="" id="">
                                    <option value="Payment Type">Payment Type</option>
                                </select>
                                <button className='submit_booking primary_btn'>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {activeTap === 'bus' && (
                <div className='booking_box'>
                    <form action="">
                        <div className='trip_type'>
                            <button className='secondary_btn'>One way</button>
                            <button className='secondary_btn'>Round Trip</button>
                            <button className='secondary_btn'>Multi-city</button>
                        </div>
                        <div className=' inputs_block d-flex'>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">From</label>
                                <input type="text" placeholder='enter your location' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">To</label>
                                <input type="text" placeholder='enter your destination' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">Departure</label>
                                <input type="text" placeholder='pick departure date' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">Return</label>
                                <input type="text" placeholder='pick return date' />
                            </div>
                        </div>
                        <div className='actions_block'>
                            <div className='checkbox_container'>
                                <input className="form-check-input mt-0" type="checkbox" value="" />
                                <label htmlFor=""> Direct Trips</label>
                            </div>
                            <div className='forms_menu'>
                                <select name="" id="">
                                    <option value="1 Adult">1Adult</option>
                                </select>
                                <select name="" id="">
                                    <option value="Economy">Economy</option>
                                </select>
                                <select name="" id="">
                                    <option value="Payment Type">Payment Type</option>
                                </select>
                                <button className='submit_booking primary_btn'>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {activeTap === 'train' && (
                <div className='booking_box'>
                    <form action="">
                        <div className='trip_type'>
                            <button className='secondary_btn'>One way</button>
                            <button className='secondary_btn'>Round Trip</button>
                            <button className='secondary_btn'>Multi-city</button>
                        </div>
                        <div className='inputs_block d-flex'>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">From</label>
                                <input type="text" placeholder='enter your location' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">To</label>
                                <input type="text" placeholder='enter your destination' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">Departure</label>
                                <input type="text" placeholder='pick departure date' />
                            </div>
                            <div className='input_container d-flex flex-column border-start p-2'>
                                <label className="fw-bold">Return</label>
                                <input type="text" placeholder='pick return date' />
                            </div>
                        </div>
                        <div className='actions_block'>
                            <div className='checkbox_container'>
                                <input className="form-check-input mt-0" type="checkbox" value="" />
                                <label htmlFor=""> Direct Trips</label>
                            </div>
                            <div className='forms_menu' >
                                <select name="" id="">
                                    <option value="1 Adult">1Adult</option>
                                </select>
                                <select name="" id="">
                                    <option value="Economy">Economy</option>
                                </select>
                                <select name="" id="">
                                    <option value="Payment Type">Payment Type</option>
                                </select>
                                <button className='submit_booking primary_btn'>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>

    )
}

export default BookingSection
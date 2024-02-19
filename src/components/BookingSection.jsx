import { useState } from 'react';

import { useTranslation } from "react-i18next";
import { IoAirplaneOutline } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { PiTrain } from "react-icons/pi";




function BookingSection() {
    const [activeTap, setActiveTap] = useState("flight")
    let { t } = useTranslation();
    const tapChangeHandler = (e) => {
        setActiveTap(e.target.id)
    }

    return (
        <div>
            <div className='tap_buttons_container'>
                <button className={`${activeTap == 'flight' && "active_button"} `} onClick={tapChangeHandler} id='flight'>

                    <IoAirplaneOutline className={`${activeTap == 'flight' && 'active_icon'} `} />
                    {t('flight_tab')}
                </button>
                <button className={`${activeTap == 'bus' && "active_button"}`} onClick={tapChangeHandler} id='bus'>
                    <TbBus className={`${activeTap == 'bus' && 'active_icon'} `} />
                    {t('bus_tab')}
                </button>

                <button className={`${activeTap == 'train' && "active_button"} `} onClick={tapChangeHandler} id='train'>
                    <PiTrain className={`${activeTap == 'train' && 'active_icon'} `} />
                    {t('train_tab')}
                </button>
            </div>
            {activeTap === 'flight' && (
                <div className='booking_box'>
                    <form action="">
                        <div className='trip_type'>
                            <button>One way</button>
                            <button>Round Trip</button>
                            <button>Multi-city</button>
                        </div>
                        <div className='inputs_block'>
                            <div className='booking_labels'>
                                <label htmlFor="">From</label>
                                <label htmlFor="">To</label>
                                <label htmlFor="">Departure</label>
                                <label htmlFor="">Return</label>
                            </div>
                            <div className='booking_inputs'>
                                <input type="text" placeholder='enter your location' />
                                <input type="text" placeholder='enter your destination' />
                                <input type="text" placeholder='pick departure date' />
                                <input type="text" placeholder='pick return date' />
                            </div>
                        </div>
                        <div className='actions_block'>
                            <div className='checkbox_container'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor=""> Direct Trips</label>
                            </div>
                            <div>
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
                            <button>One way</button>
                            <button>Round Trip</button>
                            <button>Multi-city</button>
                        </div>
                        <div className='inputs_block'>
                            <div className='booking_labels'>
                                <label htmlFor="">From</label>
                                <label htmlFor="">To</label>
                                <label htmlFor="">Departure</label>
                                <label htmlFor="">Return</label>
                            </div>
                            <div className='booking_inputs'>
                                <input type="text" placeholder='enter your location' />
                                <input type="text" placeholder='enter your destination' />
                                <input type="text" placeholder='pick departure date' />
                                <input type="text" placeholder='pick return date' />
                            </div>
                        </div>
                        <div className='actions_block'>
                            <div className='checkbox_container'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor=""> Direct Trips</label>
                            </div>
                            <div>
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
                            <button>One way</button>
                            <button>Round Trip</button>
                            <button>Multi-city</button>
                        </div>
                        <div className='inputs_block'>
                            <div className='booking_labels'>
                                <label htmlFor="">From</label>
                                <label htmlFor="">To</label>
                                <label htmlFor="">Departure</label>
                                <label htmlFor="">Return</label>
                            </div>
                            <div className='booking_inputs'>
                                <input type="text" placeholder='enter your location' />
                                <input type="text" placeholder='enter your destination' />
                                <input type="text" placeholder='pick departure date' />
                                <input type="text" placeholder='pick return date' />
                            </div>
                        </div>
                        <div className='actions_block'>
                            <div className='checkbox_container'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor=""> Direct Trips</label>
                            </div>
                            <div>
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


        // <Tabs   
        //     activeKey={key}
        //     onSelect={(k) => setKey(k)}
        //     className="mb-3"
        // >
        //     <Tab eventKey="home" class title={t('flight_tab')}>
        //         Tab content for Home
        //     </Tab>
        //     <Tab eventKey="profile" title={t('bus_tab')}>
        //         Tab content for Profile
        //     </Tab>
        //     <Tab eventKey="contact" title={t('train_tab')}>
        //         Tab content for Contact
        //     </Tab>
        // </Tabs>
    )
}

export default BookingSection
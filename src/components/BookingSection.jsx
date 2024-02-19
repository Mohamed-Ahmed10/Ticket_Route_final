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
                        <div className='inputs_block'>
                            <label htmlFor="">From</label>
                            <input type="text" />
                            <label htmlFor="">From</label>
                            <input type="text" />
                            <label htmlFor="">From</label>
                            <input type="text" />
                        </div>
                        <div className='actions_block'>

                        </div>
                    </form>
                </div>
            )}
            {activeTap === 'bus' && (
                <div className='booking_box'>
                    bus tap
                </div>
            )}
            {activeTap === 'train' && (
                <div className='booking_box'>
                    train tap
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
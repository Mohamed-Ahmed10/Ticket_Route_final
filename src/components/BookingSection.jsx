import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { IoAirplaneOutline, } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { PiTrain } from "react-icons/pi";

import airports from '../db/airports.json'
import busStations from '../db/bus_stations.json'
import TrainStations from '../db/trains.json'

import BookingForm from './BookingForm';


function BookingSection() {
    let { t } = useTranslation();
    const [activeTap, setActiveTap] = useState("flight")

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
                <BookingForm jsonLists={airports} activeTap={activeTap} />
            )}
            {activeTap === 'bus' && (
                <BookingForm jsonLists={busStations} activeTap={activeTap} />

            )}
            {activeTap === 'train' && (
                <BookingForm jsonLists={TrainStations} activeTap={activeTap} />

            )}
        </div>

    )
}

export default BookingSection
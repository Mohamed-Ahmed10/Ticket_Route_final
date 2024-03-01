import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { IoAirplaneOutline, } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { PiTrain } from "react-icons/pi";

import airports from '../db/airports.json'
import busStations from '../db/bus_stations.json'
import TrainStations from '../db/trains.json'

import BookingForm from './BookingForm';


// eslint-disable-next-line react/prop-types
function BookingSection({ trip_status }) {
    let { t } = useTranslation();
    const [activeTap, setActiveTap] = useState(trip_status)

    return (
        <div className='tabs'>
            <div className='tap_buttons_container'>
                <button className="active_button" onClick={() => setActiveTap('flight')} id='flight'>
                    {
                        trip_status === "flight"
                            ?
                            <>
                                <IoAirplaneOutline className="me-1 active_icon" />
                                {t('flight_tab')}
                            </>
                            : trip_status === "bus"
                                ? <>
                                    <TbBus className="me-1 active_icon" />
                                    {t('bus_tab')}</>
                                : trip_status === "train"
                                &&
                                <>
                                    <PiTrain className="me-1 active_icon" />
                                    {t('train_tab')}
                                </>
                    }
                </button>
            </div>
            {
                activeTap === 'flight' && (
                    <BookingForm jsonLists={airports} activeTap={activeTap} />
                )
            }
            {
                activeTap === 'bus' && (
                    <BookingForm jsonLists={busStations} activeTap={activeTap} />

                )
            }
            {
                activeTap === 'train' && (
                    <BookingForm jsonLists={TrainStations} activeTap={activeTap} />

                )
            }
        </div >

    )
}

export default BookingSection
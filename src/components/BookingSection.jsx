import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { IoAirplaneOutline, } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { PiTrain } from "react-icons/pi";
// import { useNavigate } from 'react-router-dom';
import airports from '../db/airports.json'
import busStations from '../db/bus_stations.json'
import Fuse from 'fuse.js'


function BookingSection() {
    let { t } = useTranslation();
    // const navigate = useNavigate();
    const [activeTap, setActiveTap] = useState("flight")


    /* *******************************  For flight ***************************************/
    const [oneWay, setOneWay] = useState(true);
    const [tripData, setTripData] = useState({
        fromInput: "",
        toInput: "",
        seats: "1 Adult",
        type: "Economy"
    })

    const fuse = new Fuse(airports, { keys: ["name", "code", "location"] })

    const [autoCompleteFrom, setAutoCompleteFrom] = useState([]);
    const [autoCompleteTo, setAutoCompleteTo] = useState([]);


    // console.log('from', autoCompleteFrom);
    // console.log('to', autoCompleteTo);

    useEffect(() => {
        setAutoCompleteTo(fuse.search(tripData.toInput))
    }, [tripData.toInput])

    useEffect(() => {
        setAutoCompleteFrom(fuse.search(tripData.fromInput))
    }, [tripData.fromInput])


    /* *******************************  For bus ***************************************/


    const [busTrip, setBusTrip] = useState({
        fromInput: "",
        toInput: "",
    })
    const busFuse = new Fuse(busStations, { keys: ["name", "city"] })

    const [autoCompleteBusFrom, setAutoCompleteBusFrom] = useState([]);
    const [autoCompleteBusTo, setAutoCompleteBusTo] = useState([]);

    useEffect(() => {
        setAutoCompleteBusFrom(busFuse.search(busTrip.fromInput))
    }, [busTrip.fromInput])

    useEffect(() => {
        setAutoCompleteBusTo(busFuse.search(busTrip.toInput))
    }, [busTrip.toInput])


    console.log(autoCompleteBusFrom)
    // console.log("Bus " + autoCompleteBusTo)

    // console.log(busStations)

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
                    <form action={`/search?airPlaneFrom=${tripData.fromInput}to=${tripData.toInput}`}>
                        <div className='trip_type'>
                            <button
                                onClick={() => setOneWay(!oneWay)}
                                type='button'
                                className={`secondary_btn ${oneWay && 'secondary_active'}`}>{t('one_way')}</button>
                            <button

                                onClick={() => setOneWay(!oneWay)}
                                type='button'
                                className={`secondary_btn ${!oneWay && 'secondary_active'}`}>{t('round_trip')}</button>
                        </div>
                        <div className='inputs_block d-flex'>
                            <div className='input_container flex-fill d-flex flex-column p-2'>
                                <label className="fw-bold">{t('from')}</label>
                                <input type="text"
                                    list='airports'
                                    name='from'
                                    placeholder={t("enter_your_location")}
                                    onChange={(e) => setTripData({ ...tripData, fromInput: e.target.value })}
                                    value={tripData.fromInput}
                                />
                                <datalist id="airports">
                                    {autoCompleteFrom.map((item) => (
                                        <option key={Math.random()} value={`${item.item.name},${item.item.code}`} />
                                    ))}
                                </datalist>
                            </div>
                            <div className='input_container flex-fill d-flex flex-column p-2'>
                                <label className="fw-bold">{t('to')}</label>
                                <input type="text"
                                    list='toAirports'
                                    name='to'
                                    placeholder={t("enter_your_destination")}
                                    value={tripData.toInput}
                                    onChange={(e) => setTripData({ ...tripData, toInput: e.target.value })}
                                />
                                <datalist id="toAirports">
                                    {autoCompleteTo.map((item) => (
                                        <option key={Math.random()} value={`${item.item.name},${item.item.code}`} />
                                    ))}
                                </datalist>
                            </div>
                            <div className='input_container flex-fill d-flex flex-column p-2'>
                                <label className="fw-bold">{t('departure')}</label>
                                <input type="date"
                                    name="departure"
                                    placeholder={t("pick_departure_date")} />
                            </div>
                            <div className={`input_container flex-fill d-flex flex-column p-2 ${oneWay && 'disabled'}`}>
                                <label className={`fw-bold ${oneWay && 'disabled'}`}>{t('return')}</label>
                                <input disabled={oneWay} type="text" name='return' placeholder={t("pick_return_date")} />
                            </div>
                        </div>
                        <div className='actions_block'>
                            <div className='checkbox_container'>
                                <input
                                    className="form-check-input mt-0" id="direct"
                                    name='direct'
                                    type="checkbox" value="" />
                                <label htmlFor="direct">{t('direct_trips')}</label>
                            </div>
                            <div className='forms_menu' >
                                <select name="seats" id="">
                                    <option value="1 Adult">1Adult</option>
                                    <option value="2 Adult">2Adult</option>
                                    <option value="3 Adult">3Adult</option>
                                    <option value="4 Adult">4Adult</option>
                                    <option value="5 Adult">5Adult</option>
                                </select>
                                <select name="package" id="">
                                    <option value="Economy">{t('economy')}</option>
                                    <option value="Business">{t('business')}</option>
                                </select>
                                <select name="payment" id="">
                                    <option value="Payment Type">{t('payment_type')}</option>
                                </select>
                                <button className='submit_booking primary_btn link-underline link-underline-opacity-0'
                                >{t('search')}</button>
                            </div>
                        </div>
                        <datalist>
                            <option value="Browser">browser</option>
                        </datalist>
                    </form>
                </div>
            )}
            {activeTap === 'bus' && (
                <div className='booking_box'>
                    <form action={`/search?from=${busTrip.fromInput}to=${busTrip.toInput}`}>
                        <div className='trip_type'>
                            <button
                                type='button'
                                className={`secondary_btn secondary_active`}>{t('one_way')}</button>
                        </div>
                        <div className='inputs_block d-flex'>
                            <div className='input_container flex-fill d-flex flex-column p-2'>
                                <label className="fw-bold">{t('from')}</label>
                                <input
                                    list="busStations"
                                    type="text"
                                    name="busFrom"
                                    placeholder={t("enter_your_location")}
                                    onChange={(e) => setBusTrip({ ...busTrip, fromInput: e.target.value })}
                                    value={busTrip.fromInput}
                                />
                                <datalist id="busStations">
                                    {autoCompleteBusFrom.map((item) => (
                                        <option key={`${Math.random()}`} value={`${item.item.name}`} />
                                    ))}
                                </datalist>
                            </div>
                            <div className='input_container flex-fill d-flex flex-column p-2'>
                                <label className="fw-bold">{t('to')}</label>
                                <input
                                    type="text"
                                    name="busTo"
                                    list="toBusStations"
                                    placeholder={t("enter_your_destination")}
                                    onChange={(e) => setBusTrip({ ...busTrip, toInput: e.target.value })}
                                    value={busTrip.toInput}
                                />
                                <datalist id="toBusStations">
                                    {autoCompleteBusTo.map((item) => (
                                        <option key={`${Math.random()}`} value={`${item.item.name}`} />
                                    ))}
                                </datalist>
                            </div>
                            <div className='input_container flex-fill d-flex flex-column p-2'>
                                <label className="fw-bold">{t('departure')}</label>
                                <input type="date"
                                    name="departure"
                                    placeholder={t("pick_departure_date")} />
                            </div>
                        </div>
                        <div className='actions_block flex-row-reverse'>
                            <div className='forms_menu' >
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
                            <button
                                onClick={() => setOneWay(!oneWay)}
                                type='button'
                                className={`secondary_btn ${oneWay && 'secondary_active'}`}>{t('one_way')}</button>
                        </div>
                        <div className='inputs_block d-flex'>
                            <div className='input_container flex-fill d-flex flex-column p-2'>
                                <label className="fw-bold">{t('from')}</label>
                                <input type="text" placeholder={t("enter_your_location")}
                                    onChange={(e) => setTripData({ ...tripData, fromInput: e.target.value })}
                                    value={tripData.fromInput}
                                />
                            </div>
                            <div className='input_container flex-fill d-flex flex-column p-2'>
                                <label className="fw-bold">{t('to')}</label>
                                <input type="text" placeholder={t("enter_your_destination")} />
                            </div>
                            <div className='input_container flex-fill d-flex flex-column p-2'>
                                <label className="fw-bold">{t('departure')}</label>
                                <input type="text" placeholder={t("pick_departure_date")} />
                            </div>
                        </div>
                        <div className='actions_block flex-row-reverse'>
                            <div className='forms_menu' >
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
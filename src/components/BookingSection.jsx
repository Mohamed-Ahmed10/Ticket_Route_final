import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { IoAirplaneOutline, } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { PiTrain } from "react-icons/pi";
// import { useNavigate } from 'react-router-dom';
import airports from '../db/airports.json'

import Fuse from 'fuse.js'

// import { Link } from 'react-router-dom';

// First, get the user's location coordinates using the Geolocation API


// Then, pass the location coordinates to a Geocoding API to get the city name


function BookingSection() {
    // const navigate = useNavigate();
    const fuse = new Fuse(airports, { keys: ["name", "code", "location"] })

    const [autoCompleteFrom, setAutoCompleteFrom] = useState([]);
    const [autoCompleteTo, setAutoCompleteTo] = useState([]);

    const [activeTap, setActiveTap] = useState("flight")
    const [oneWay, setOneWay] = useState(true);
    // const [searchTerm, setSearchTerm] = useState("");

    let { t } = useTranslation();

    const [tripData, setTripData] = useState({
        fromInput: "",
        toInput: "",
        seats: "1 Adult",
        type: "Economy"
    })


    // useEffect(() => {
    //     if (navigator.geolocation)
    //     {
    //         navigator.geolocation.getCurrentPosition(showCity);
    //     } else
    //     {
    //         console.log("Geolocation is not supported by this browser.");
    //     }

    //     function showCity(position) {
    //         const latitude = position.coords.latitude;
    //         const longitude = position.coords.longitude;

    //         // Make a request to a Geocoding API (e.g. Google Maps Geocoding API)
    //         const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 // Parse the city name from the API response
    //                 const city = data
    //                 console.log(city);
    //                 setFromInput(city.city)
    //             })
    //             .catch((error) => console.log(error));
    //     }
    // }, [])


    // useEffect(() => {
    //     const urlParams = new URLSearchParams(location.search);
    //     const searchTermFromUrl = urlParams.get("searchTerm");
    //     if (searchTermFromUrl)
    //     {
    //         setSearchTerm(searchTermFromUrl);
    //     }
    // }, [location.search]);


    useEffect(() => {

        setAutoCompleteFrom(fuse.search(tripData.fromInput))
        console.log(autoCompleteFrom);
        setAutoCompleteTo(fuse.search(tripData.toInput))
        console.log(autoCompleteTo);

    }, [tripData.formInput, tripData.toInput])
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
                    <form action={`/search?from=${tripData.formInput}to=${tripData.toInput}`}>
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
                            <div className='input_container d-flex flex-column p-2'>
                                <label className="fw-bold">{t('from')}</label>
                                <input type="text"
                                    list='aritports'
                                    name='from'
                                    placeholder={t("enter_your_location")}
                                    onChange={(e) => setTripData({ ...tripData, fromInput: e.target.value })}
                                    value={tripData.fromInput} />
                                <datalist id="aritports">
                                    {autoCompleteFrom.map((item) => (
                                        <option key={item.item.code} value={item.item.name} />
                                    ))}
                                </datalist>
                            </div>
                            <div className='input_container d-flex flex-column p-2'>
                                <label className="fw-bold">{t('to')}</label>
                                <input type="text"
                                    list='aritports'
                                    name='to'
                                    placeholder={t("enter_your_destination")}
                                    value={tripData.toInput}
                                    onChange={(e) => setTripData({ ...tripData, toInput: e.target.value })}
                                />
                                <datalist id="aritports">
                                    {autoCompleteTo.map((item) => (
                                        <option key={item.item.code} value={item.item.name} />
                                    ))}
                                </datalist>
                            </div>
                            <div className='input_container d-flex flex-column p-2'>
                                <label className="fw-bold">{t('departure')}</label>
                                <input type="date"
                                    name="departure"
                                    placeholder={t("pick_departure_date")} />
                            </div>
                            <div className={`input_container d-flex flex-column p-2 ${oneWay && 'disabled'}`}>
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
                    <form action="">
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
                            <div className='input_container d-flex flex-column p-2'>
                                <label className="fw-bold">{t('from')}</label>
                                <input type="text" placeholder={t("enter_your_location")}
                                    onChange={(e) => setTripData({ ...tripData, fromInput: e.target.value })}
                                    value={tripData.formInput}
                                />
                            </div>
                            <div className='input_container d-flex flex-column p-2'>
                                <label className="fw-bold">{t('to')}</label>
                                <input type="text" placeholder={t("enter_your_destination")} />
                            </div>
                            <div className='input_container d-flex flex-column p-2'>
                                <label className="fw-bold">{t('departure')}</label>
                                <input type="text" placeholder={t("pick_departure_date")} />
                            </div>
                            <div className={`input_container d-flex flex-column p-2 ${oneWay && 'disabled'}`}>
                                <label className={`fw-bold ${oneWay && 'disabled'}`}>{t('return')}</label>
                                <input disabled={oneWay} type="text" placeholder={t("pick_return_date")} />
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
                            <div className='input_container d-flex flex-column p-2'>
                                <label className="fw-bold">{t('from')}</label>
                                <input type="text" placeholder={t("enter_your_location")}
                                    onChange={(e) => setTripData({ ...tripData, fromInput: e.target.value })}
                                    value={tripData.formInput}
                                />
                            </div>
                            <div className='input_container d-flex flex-column p-2'>
                                <label className="fw-bold">{t('to')}</label>
                                <input type="text" placeholder={t("enter_your_destination")} />
                            </div>
                            <div className='input_container d-flex flex-column p-2'>
                                <label className="fw-bold">{t('departure')}</label>
                                <input type="text" placeholder={t("pick_departure_date")} />
                            </div>
                            <div className={`input_container d-flex flex-column p-2 ${oneWay && 'disabled'}`}>
                                <label className={`fw-bold ${oneWay && 'disabled'}`}>{t('return')}</label>
                                <input disabled={oneWay} type="text" placeholder={t("pick_return_date")} />
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
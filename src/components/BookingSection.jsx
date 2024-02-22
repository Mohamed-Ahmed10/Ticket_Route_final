import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { IoAirplaneOutline } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
import { PiTrain } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// First, get the user's location coordinates using the Geolocation API


// Then, pass the location coordinates to a Geocoding API to get the city name


function BookingSection() {
    const navigate = useNavigate();

    const [activeTap, setActiveTap] = useState("flight")
    const [oneWay, setOneWay] = useState(true);
    const [searchTerm, setSearchTerm] = useState({});

    let { t } = useTranslation();
    const [fromInput, setFromInput] = useState("")
    useEffect(() => {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(showCity);
        } else
        {
            console.log("Geolocation is not supported by this browser.");
        }

        function showCity(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Make a request to a Geocoding API (e.g. Google Maps Geocoding API)
            const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    // Parse the city name from the API response
                    const city = data
                    console.log(city);
                    setFromInput(city.city)
                })
                .catch((error) => console.log(error));
        }
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("searchTerm", searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get("searchTerm");
        if (searchTermFromUrl)
        {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);

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
                                    name='from'
                                    placeholder={t("enter_your_location")}
                                    onChange={(e) => setFromInput(e.target.value)}
                                    value={`${fromInput}`} />
                            </div>
                            <div className='input_container d-flex flex-column p-2'>
                                <label className="fw-bold">{t('to')}</label>
                                <input type="text"
                                    name='to'
                                    placeholder={t("enter_your_destination")}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className='input_container d-flex flex-column p-2'>
                                <label className="fw-bold">{t('departure')}</label>
                                <input type="text"
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
                                </select>
                                <select name="package" id="">
                                    <option value="Economy">{t('economy')}</option>
                                </select>
                                <select name="payment" id="">
                                    <option value="Payment Type">{t('payment_type')}</option>
                                </select>
                                <button className='submit_booking primary_btn link-underline link-underline-opacity-0'
                                    onClick={handleSearch}
                                >{t('search')}</button>
                            </div>
                        </div>
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
                                    onChange={(e) => setFromInput(e.target.value)}
                                    value={`${fromInput}`}
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
                                    onChange={(e) => setFromInput(e.target.value)}
                                    value={`${fromInput}`}
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
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Fuse from 'fuse.js'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

// import airports from '../db/airports.json'


const BookingForm = ({ jsonLists, activeTap }) => {
    const navigate = useNavigate();




    const [oneWay, setOneWay] = useState(true);
    const [autoCompleteFrom, setAutoCompleteFrom] = useState([]);
    const [autoCompleteTo, setAutoCompleteTo] = useState([]);
    const [busTrip, setBusTrip] = useState({
        fromInput: "",
        toInput: "",
        departure: ""
    })
    const [trainTrip, setTrainTrip] = useState({
        fromInput: "",
        toInput: "",
        departure: ""
    })


    const [tripData, setTripData] = useState({
        fromInput: "",
        toInput: "",
        seats: "1 Adult",
        type: "Economy",
        departure: ""
    })
    const fuse = new Fuse(jsonLists, { keys: ["name_ar", "code", "country", "city", "name"] })
    activeTap == "flight" ? tripData.fromInput : activeTap == "bus" ? busTrip.fromInput : trainTrip.fromInput
    let { t, i18n } = useTranslation();
    useEffect(() => {
        setAutoCompleteTo(fuse.search(activeTap == "flight" ? tripData.toInput : activeTap == "bus" ? busTrip.toInput : trainTrip.toInput))
    }, [activeTap == "flight" ? tripData.toInput : activeTap == "bus" ? busTrip.toInput : trainTrip.toInput])

    useEffect(() => {
        setAutoCompleteFrom(fuse.search(activeTap == "flight" ? tripData.fromInput : activeTap == "bus" ? busTrip.fromInput : trainTrip.fromInput))
    }, [activeTap == "flight" ? tripData.fromInput : activeTap == "bus" ? busTrip.fromInput : trainTrip.fromInput])


    // Create query string for flight
    const flightSearchData = `from=${(tripData.fromInput)}&to=${(tripData.toInput)}&departure=${(tripData.departure)}&oneway=${oneWay}&vech=flight`;

    let handleFlightSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?${flightSearchData}`)
    }
    // Create query string for bus
    const busSearchData = `from=${(busTrip.fromInput)}&to=${(busTrip.toInput)}&departure=${(busTrip.departure)}&vech=bus`;

    let handleBusSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?${busSearchData}`)
    }
    // Create query string for train
    const trainSearchData = `from=${(trainTrip.fromInput)}&to=${(trainTrip.toInput)}&departure=${(trainTrip.departure)}&vech=train`;

    let handleTrainSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?${trainSearchData}`)
    }

    return (
        <div className='booking_box'>
            <form action={`/search?`} onSubmit={activeTap == 'flight' ? handleFlightSubmit : activeTap == 'bus' ? handleBusSubmit : handleTrainSubmit} >
                <div className='inputs_block d-flex'>
                    <div className='input_container flex-fill d-flex flex-column p-2'>
                        <label className="fw-bold">{t('from')}</label>
                        <input type="text"
                            list='Data'
                            name='from'
                            autoComplete="off"
                            placeholder={t("enter_your_location")}
                            onChange={
                                activeTap == "flight"
                                    ? (e) => setTripData({ ...tripData, fromInput: e.target.value })
                                    : activeTap == "bus" ? (e) => setBusTrip({ ...busTrip, fromInput: e.target.value })
                                        : (e) => setTrainTrip({ ...trainTrip, fromInput: e.target.value })}
                            value={activeTap == "flight" ? tripData.fromInput : activeTap == "bus" ? busTrip.fromInput : trainTrip.fromInput}
                        />
                        <datalist id="Data">
                            {autoCompleteFrom.map((item, index) =>
                                <option key={index} value={
                                    `${i18n.language == "ar" ? item.item.name_ar : item.item.name},${activeTap == "bus" ? "Bus Station"
                                        : activeTap == "train" ? "train Station"
                                            : item.item.code}`} />
                            )}
                        </datalist>
                    </div>
                    <div className='input_container flex-fill d-flex flex-column p-2'>
                        <label className="fw-bold">{t('to')}</label>
                        <input type="text"
                            list='toData'
                            name='to'
                            autoComplete="off"
                            placeholder={t("enter_your_destination")}
                            value={activeTap == "flight" ? tripData.toInput : activeTap == "bus" ? busTrip.toInput : trainTrip.toInput}
                            onChange={
                                activeTap == "flight" ? (e) => setTripData({ ...tripData, toInput: e.target.value }) : activeTap == "bus" ? (e) => setBusTrip({ ...busTrip, toInput: e.target.value }) : (e) => setTrainTrip({ ...trainTrip, toInput: e.target.value })
                            }
                        />
                        <datalist id="toData">
                            {autoCompleteTo.map((item) => (
                                <option key={Math.random()} value={`${i18n.language == "ar" ? item.item.name_ar : item.item.name},${activeTap == "bus" ? "Bus Station" : activeTap == "train" ? "train Station" : item.item.code}`} />
                            ))}
                        </datalist>
                    </div>
                    {
                        activeTap !== 'train'
                        &&
                        <div className='input_container flex-fill d-flex flex-column p-2'>
                            <label className="fw-bold">{t('date_leave')}</label>
                            <input type="date"
                                name="departure"
                                autoComplete="off"
                                placeholder={t("pick_departure_date")}
                                value={activeTap == "flight" ? tripData.departure : activeTap == "bus" ? busTrip.departure : trainTrip.departure}
                                onChange={
                                    activeTap == "flight" ? (e) => setTripData({ ...tripData, departure: e.target.value }) : activeTap == "bus" ? (e) => setBusTrip({ ...busTrip, departure: e.target.value }) : (e) => setTrainTrip({ ...trainTrip, departure: e.target.value })
                                }
                            />
                        </div>
                    }
                </div>
                <div className='actions_block'>
                    <div className='checkbox_container'>
                    </div>
                    <div className='forms_menu' >
                        <button className='submit_booking primary_btn link-underline link-underline-opacity-0'
                        >{t('search')}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BookingForm
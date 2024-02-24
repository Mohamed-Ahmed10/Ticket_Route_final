import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { IoStarOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { useEffect, useState } from "react";
// import { trips } from '../db/trips'
// import Fuse from 'fuse.js'
// import airports from '../db/airports.json'
// import airplane from "../assets/test_image.png"

import { useSearchParams } from "react-router-dom";
import TicketCards from "../components/TicketCards";
import busTrips from '../db/bus_trips.json'
import trainTrips from '../db/train_trips.json'
// import { FaChrome } from "react-icons/fa6";


// const fuse = new Fuse(airports, { keys: ["name", "code", "country"] })
// console.log("fuse", fuse)
// const result = fuse.search("states")
// console.log("result", result);

export default function Search() {
    let { t } = useTranslation();
    const [fromCodeState, setFromCodeState] = useState("CAI")
    const [toCodeState, setToCodeState] = useState("ORY")
    const [departDateState, setDepartDateState] = useState("2024-02-27")
    const [availableTickets, setAvailableTickets] = useState([]);

    const [searchFilterData, setSearchFilterData] = useState({
        to: "",
        from: "",
        departure: "",
        roundTrip: false,
        seats: "1 Adult",
        type: "Economy"
    });
    const [params] = useSearchParams()
    const searchVech = params.get('vech');

    useEffect(() => {
        //putting query data into objects :D
        const urlParams = new URLSearchParams(location.search);
        const toFromUrl = urlParams.get("to");
        const fromFromUrl = urlParams.get("from");
        const departureFromUrl = urlParams.get("departure");
        const roundTripFromUrl = urlParams.get("roundTrip");

        // making sure if one of data truly exist

        if (toFromUrl || fromFromUrl || departureFromUrl || roundTripFromUrl)
        {
            setSearchFilterData({
                to: toFromUrl || "",
                from: fromFromUrl || "",
                departure: departureFromUrl || "",
                roundTrip: roundTripFromUrl || false
            })
        }

        // const keyWord = urlParams.toString().split("=")[1]
        //FETCH DATA HERE
        // console.log(keyWord)
        //ON CHANGE INPUTS HERE :D
        // const filteredTickets = trips.filter((ticket) => ticket.name.includes(keyWord));
        // setAvailableTickets(filteredTickets)
        // console.log(availableTickets);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search])

    const handleChange = (e) => {
        if (e.target.id === "from")
        {
            setSearchFilterData({ ...searchFilterData, from: e.target.value });
        }
        if (e.target.id === "to")
        {
            setSearchFilterData({ ...searchFilterData, to: e.target.value });
        }
        if (e.target.id === "departure")
        {
            setSearchFilterData({ ...searchFilterData, departure: e.target.value });
        }
        if (e.target.id === "seats")
        {
            setSearchFilterData({ ...searchFilterData, seats: e.target.value });
        }
        if (e.target.id === "type")
        {
            setSearchFilterData({ ...searchFilterData, type: e.target.value });
        }
    };



    useEffect(() => {
        // console.log(fromCodeState, toCodeState);
        const fetchTrips = async () => {
            try
            {
                setFromCodeState(searchFilterData.from.split(",")[1])
                setToCodeState(searchFilterData.from.split(",")[1])
                setDepartDateState(searchFilterData.departure)
                const res = await fetch(`api/search.json?engine=google_flights&departure_id=${fromCodeState}&arrival_id=${toCodeState}&outbound_date=${departDateState}&return_date=2024-03-01&currency=USD&hl=en&gl=eg&api_key=a1949d5cd8b260a18a05dfe43a4f7e23eca8002a6ff1851894367af2d252925c`);
                const data = await res.json();
                // console.log(data);
                if (searchVech == 'flight')
                {
                    setAvailableTickets(data)
                } else if (searchVech == 'bus')
                {
                    setAvailableTickets(busTrips)
                } else
                {
                    setAvailableTickets(trainTrips)
                }
            } catch (error)
            {
                console.log(error);
            }
        };
        fetchTrips();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(availableTickets.other_flights)

    return (
        <Container className="mt-4 search_view">
            <div className="d-flex justify-content-between align-content-center">
                <div className="left">
                    <div className='trip_type'>
                        <button className='secondary_btn'>{t('one_way')}</button>
                        <button className='secondary_btn'>{t('round_trip')}</button>
                    </div>
                </div>
                <div className="right">
                    <div className='forms_menu' >
                        <select name="seats" id="seats" value={searchFilterData.seats} onChange={handleChange} >
                            <option value="1 Adult">1Adult</option>
                            <option value="2 Adult">2Adult</option>
                            <option value="3 Adult">3Adult</option>
                            <option value="4 Adult">4Adult</option>
                            <option value="5 Adult">5Adult</option>
                        </select>
                        <select name="type" id="type" value={searchFilterData.type} onChange={handleChange}>
                            <option value="Economy">{t('economy')}</option>
                            <option value="Business">{t('business')}</option>
                        </select>
                        <select name="payment" id="payment">
                            <option value="Payment Type">{t('payment_type')}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='inputs_block d-flex'>
                <div className='input_container d-flex flex-column p-2'>
                    <label className="fw-bold">{t('from')}</label>
                    <input type="text" id="from" placeholder={t("enter_your_location")}
                        value={searchFilterData.from} onChange={handleChange}
                    />
                </div>
                <div className='input_container d-flex flex-column border-start p-2'>
                    <label className="fw-bold">{t('to')}</label>
                    <input type="text" id="to" value={searchFilterData.to} onChange={handleChange} placeholder={t("enter_your_destination")} />
                </div>
                <div className='input_container d-flex flex-column border-start p-2'>
                    <label className="fw-bold">{t('departure')}</label>
                    <input value={searchFilterData.departure} id="departure" onChange={handleChange} type="text" placeholder={t("pick_departure_date")} />
                </div>
                <div className='input_container d-flex flex-column border-start p-2'>
                    <label className="fw-bold">{t('return')}</label>
                    <input type="text" placeholder={t("pick_return_date")} />
                </div>
            </div>
            <hr className="my-4" />
            <div className="d-flex filter_parent">
                <div className="flex-fill d-flex filter p-2 active">
                    <IoStarOutline />
                    <div>
                        <b>{t('recommended')}</b>
                        <div className="price">0</div>
                    </div>
                </div>
                <div className="flex-fill d-flex filter p-2">
                    <BsCurrencyDollar />

                    <div>
                        <b>{t('cheapest')}</b>
                        <div className="price">0</div>
                    </div>
                </div>
                <div className="flex-fill d-flex filter p-2">
                    <SiMinutemailer />
                    <div>
                        <b>{t('fastest')}</b>
                        <div className="price">0</div>
                    </div>
                </div>
            </div>

            <TicketCards availableTickets={availableTickets} searchVech={searchVech} />


        </Container>
    )
}

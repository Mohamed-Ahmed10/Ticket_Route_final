import { Container, Card, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { IoStarOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { useEffect, useState } from "react";
import { trips } from '../db/trips'
import Fuse from 'fuse.js'
import airports from '../db/airports.json'
import airplane from "../assets/test_image.png"
import { IoMdAlarm } from "react-icons/io";


const fuse = new Fuse(airports, { keys: ["name", "code", "location"] })
console.log("fuse", fuse)
const result = fuse.search("states")
console.log("result", result);

export default function Search() {
    let { t } = useTranslation();
    const [availableTickets, setAvailableTickets] = useState([]);

    const [searchFilterData, setSearchFilterData] = useState({
        to: "",
        from: "",
        departure: "",
        roundTrip: false,
        seats: "1 Adult",
        type: "Economy"
    });

    useEffect(() => {
        //putting query data into objects :D
        const urlParams = new URLSearchParams(location.search);
        const toFromUrl = urlParams.get("to");
        const fromFromUrl = urlParams.get("from");
        const departureFromUrl = urlParams.get("departure");
        const roundTripFromUrl = urlParams.get("roundTrip");

        // making sure if one of data truly exist

        if (toFromUrl || fromFromUrl || departureFromUrl || roundTripFromUrl) {
            setSearchFilterData({
                to: toFromUrl || "",
                from: fromFromUrl || "",
                departure: departureFromUrl || "",
                roundTrip: roundTripFromUrl || false
            })
        }
        const keyWord = urlParams.toString().split("=")[1]
        //FETCH DATA HERE
        console.log(keyWord)
        //ON CHANGE INPUTS HERE :D
        const filteredTickets = trips.filter((ticket) => ticket.name.includes(keyWord));
        setAvailableTickets(filteredTickets)
        console.log(availableTickets);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search])

    const handleChange = (e) => {


        if (e.target.id === "from") {
            setSearchFilterData({ ...searchFilterData, from: e.target.value });
        }
        if (e.target.id === "to") {
            setSearchFilterData({ ...searchFilterData, to: e.target.value });
        }
        if (e.target.id === "departure") {
            setSearchFilterData({ ...searchFilterData, departure: e.target.value });
        }
        if (e.target.id === "seats") {
            setSearchFilterData({ ...searchFilterData, seats: e.target.value });
        }
        if (e.target.id === "type") {
            setSearchFilterData({ ...searchFilterData, type: e.target.value });
        }
    };
    console.log(searchFilterData);
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
            <Card className="my-2 shadow p-2 single_trip">
                <Row>
                    <Col md="2" className="d-flex align-items-center">
                        <img src={airplane} className="py-4 img-fluid" alt="test" />
                    </Col>
                    <Col md="8" className="d-flex flex-row trip_details align-items-center">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <div className="ps-3 py-1 w-100 d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold">10:00</span>
                                <span className="text-secondary">
                                    <IoMdAlarm className="mb-1 me-1" />
                                    02h 00m
                                </span>
                                <span className="fw-bold">12:00</span>
                            </div>
                            <div className="line"></div>
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold text-secondary">test</span>
                                <span className="text-secondary">Direct</span>
                                <span className="fw-bold text-secondary">test</span>
                            </div>
                        </div>
                    </Col>
                    <Col md="2 last text-center">
                        <div className="text-secondary mt-4">From 7 Websites</div>
                        <div className="price my-2">6,570</div>
                        <div className="text-secondary my-2">Per Person</div>
                    </Col>
                </Row>
            </Card>
            <Card className="my-2 shadow p-2 single_trip">
                <Row>
                    <Col md="2" className="d-flex align-items-center">
                        <img src={airplane} className="py-4 img-fluid" alt="test" />
                    </Col>
                    <Col md="8" className="d-flex flex-row trip_details align-items-center">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <div className="ps-3 py-1 w-100 d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold">10:00</span>
                                <span className="text-secondary">
                                    <IoMdAlarm className="mb-1 me-1" />
                                    02h 00m
                                </span>
                                <span className="fw-bold">12:00</span>
                            </div>
                            <div className="line"></div>
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold text-secondary">test</span>
                                <span className="text-secondary">Direct</span>
                                <span className="fw-bold text-secondary">test</span>
                            </div>
                        </div>
                    </Col>
                    <Col md="2 last text-center">
                        <div className="text-secondary mt-4">From 7 Websites</div>
                        <div className="price my-2">6,570</div>
                        <div className="text-secondary my-2">Per Person</div>
                    </Col>
                </Row>
            </Card>
            <Card className="my-2 shadow p-2 single_trip">
                <Row>
                    <Col md="2" className="d-flex align-items-center">
                        <img src={airplane} className="py-4 img-fluid" alt="test" />
                    </Col>
                    <Col md="8" className="d-flex flex-row trip_details align-items-center">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <div className="ps-3 py-1 w-100 d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold">10:00</span>
                                <span className="text-secondary">
                                    <IoMdAlarm className="mb-1 me-1" />
                                    02h 00m
                                </span>
                                <span className="fw-bold">12:00</span>
                            </div>
                            <div className="line"></div>
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold text-secondary">test</span>
                                <span className="text-secondary">Direct</span>
                                <span className="fw-bold text-secondary">test</span>
                            </div>
                        </div>
                    </Col>
                    <Col md="2 last text-center">
                        <div className="text-secondary mt-4">From 7 Websites</div>
                        <div className="price my-2">6,570</div>
                        <div className="text-secondary my-2">Per Person</div>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

/* eslint-disable react/prop-types */
import { Card, Row, Col } from "react-bootstrap"
import { IoMdAlarm } from "react-icons/io";
import gobusLogo from '../assets/partners/go_bus.png'
import fastbusLogo from '../assets/partners/fast_bus.png'
import railwayLogo from '../assets/partners/railway.png'
import { useTranslation } from "react-i18next";

const TicketCards = ({ availableTickets, searchVech }) => {
    let { t } = useTranslation()
    return (
        <>
            {searchVech == 'flight' ? (
                <>
                    {!availableTickets && (
                        <div>
                            <p>Loading please wait..</p>
                            <div className='d-flex justify-content-center'>
                                <div className="loader"></div>
                            </div>
                        </div>

                    )}
                    {availableTickets.other_flights?.map((item) => ((item?.flights.map((item2, i) => (
                        <Card key={`${item2}/${i}`} className="my-2 shadow p-2 single_trip">
                            <Row>
                                <Col md="2" className="d-flex align-items-center justify-content-center">
                                    <img src={item.airline_logo
                                    } className="py-4 img-fluid" alt="test" />
                                </Col>
                                <Col md="8" className="d-flex flex-row trip_details align-items-center">
                                    <div className="ps-3 py-1 w-100 d-flex flex-column justify-content-between">
                                        <div className="d-flex justify-content-between">
                                            <span className="fw-bold text-center" >
                                                {t('date_leave')} : {item.flights[0].departure_airport.time.split(" ")[0]}
                                                <br />
                                                {t('time_leave')}  : {item.flights[0].departure_airport.time.split(" ")[1]}
                                            </span>
                                            <span className="text-secondary" style={{ direction: "ltr" }}>
                                                <IoMdAlarm className="mb-1 me-1" />
                                                {Math.ceil(item.flights[0].duration / 60)} h : {item.flights[0].duration % 60} m
                                            </span>
                                            <span className="fw-bold text-center">
                                                {t('date_arrival')} : {item.flights[0].arrival_airport.time.split(" ")[0]}
                                                <br />
                                                {t('time_arrival')}  : {item.flights[0].arrival_airport.time.split(" ")[1]}
                                            </span>
                                        </div>
                                        <div className="line"></div>
                                        <div className="d-flex justify-content-between">
                                            <span className="fw-bold text-secondary">{item.flights[0].arrival_airport.id}</span>
                                            <span className="text-secondary">{t("plane_model")} : {item2.
                                                airplane
                                            }</span>
                                            <span className="fw-bold text-secondary">{item.flights[0].departure_airport.id}</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="2 last text-center">
                                    <div className="text-secondary mt-4">{item.flights[0].travel_class}</div>
                                    <div className="price my-2">{item.price * 30} </div>
                                    <div className="text-secondary my-2">{t("per_person")}</div>
                                </Col>
                            </Row>
                        </Card>
                    )))))
                    }
                </>
            ) :
                <>
                    {!availableTickets && (
                        <div className='d-flex justify-content-center'>
                            <div className="loader"></div>
                        </div>
                    )}
                    {availableTickets.map((item, i) => (
                        <Card key={`${item}/${i}`} className="my-2 shadow p-2 single_trip">
                            <Row>
                                <Col md="2" className="d-flex align-items-center justify-content-center">
                                    <img src={item.company == 'gobus' ? gobusLogo : item.company == 'eastbus' ? fastbusLogo : railwayLogo} className="py-4 img-fluid" alt="test" />
                                </Col>
                                <Col md="8" className="d-flex flex-row trip_details align-items-center">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <div className="ps-3 py-1 w-100 d-flex flex-column justify-content-between">
                                        <div className="d-flex justify-content-between">
                                            <span className="fw-bold">{item.arrival}</span>
                                            <span className="text-secondary" style={{direction:"ltr"}}>
                                                {item.duration}
                                                <IoMdAlarm className="ms-1" />
                                            </span>
                                            <span className="fw-bold">{item.departure}</span>
                                        </div>
                                        <div className="line"></div>
                                        <div className="d-flex justify-content-between">
                                            <span className="fw-bold text-secondary">{item.from}</span>
                                            <span className="text-secondary">{item.company}</span>
                                            <span className="fw-bold text-secondary">{item.to}</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="2" className="d-flex text-center flex-column justify-content-center">
                                    <div className="price my-2">{item.price} </div>
                                    <div className="text-secondary my-2"> {t("per_person")}</div>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </>
            }
        </>
    )
}

export default TicketCards
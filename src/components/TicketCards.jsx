/* eslint-disable react/prop-types */
import { Card, Row, Col } from "react-bootstrap"
import { IoMdAlarm } from "react-icons/io";

const TicketCards = ({ availableTickets, searchVech }) => {
    return (
        <>
            {searchVech == 'flight' ? (
                <>
                    {availableTickets.other_flights?.map((item) => ((item?.flights.map((item2, i) => (
                        <Card key={`${item2}/${i}`} className="my-2 shadow p-2 single_trip">
                            <Row>
                                <Col md="2" className="d-flex align-items-center">
                                    <img src={item.airline_logo
                                    } className="py-4 img-fluid" alt="test" />
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
                                            <span className="fw-bold text-secondary">{item2.airline}</span>
                                            <span className="text-secondary">{item2.
                                                airplane
                                            }</span>
                                            <span className="fw-bold text-secondary">{item2.airline}</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="2 last text-center">
                                    <div className="text-secondary mt-4">From 7 Websites</div>
                                    <div className="price my-2">{item.price * 30} </div>
                                    <div className="text-secondary my-2">Per Person</div>
                                </Col>
                            </Row>
                        </Card>
                    )))))
                    }
                </>
            ) :
                <>
                    {availableTickets.map((item, i) => (
                        <Card key={`${item}/${i}`} className="my-2 shadow p-2 single_trip">
                            <Row>
                                <Col md="2" className="d-flex align-items-center">
                                    <img src={item.airline_logo
                                    } className="py-4 img-fluid" alt="test" />
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
                                            <span className="fw-bold text-secondary">{item.company}</span>
                                            <span className="text-secondary">{item.company}</span>
                                            <span className="fw-bold text-secondary">{item.company}</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="2 last text-center">
                                    <div className="text-secondary mt-4">From 7 Websites</div>
                                    <div className="price my-2">{item.price} </div>
                                    <div className="text-secondary my-2">Per Person</div>
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
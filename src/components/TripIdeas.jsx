/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Row, Col, Card } from "react-bootstrap"
import { useTranslation } from 'react-i18next';
import { places as data_places } from "../db/homepage_places"
// eslint-disable-next-line react/prop-types
const TripIdeas = ({ trip_status }) => {
    let { t } = useTranslation()

    let [places, setPlaces] = useState([])
    // const [activeButton, setActiveButton] = useState('All');

    useEffect(() => {
        setTimeout(() => setPlaces(data_places.filter(trip => trip.by === trip_status)), 1500)
    }, [])

    // const handleButtonClick = (buttonName) => {
    //     setActiveButton(buttonName)
    //     console.log(places.filter((place => place.categories.find(category => category === activeButton))))
    // };

    // let buttons_data = ['All', 'Romantic', 'Nature', 'Family-friendly', 'BackPacking', 'Beach', 'Cultural', 'Summer']

    return (
        <section>
            <h3 className='my-4'>{t("trips_from_cairo")}</h3>
            {/* <div className="filters">
                {
                    buttons_data.map((btn, index) =>
                        <button
                            className={`secondary_btn  ${activeButton === btn ? 'active' : ''}`}
                            onClick={() => handleButtonClick(btn)}
                            key={index}>{btn}
                        </button>
                    )
                }
            </div> */}
            <div className="trips_container">
                <Row className='m-4'>
                    {
                        places.length > 0 ?
                            places.map((place) =>
                                <Col key={Math.random()} sm="12" md="4" className='p-2'>
                                    <Card className="h-100">
                                        <Row className="h-100">
                                            <Col md={5}>
                                                <img src={place.image} loading="lazy" className='w-100 h-100' alt="..." />
                                            </Col>
                                            <Col md={7}>
                                                <div className="description flex-grow-1">
                                                    <h5>{place.city}</h5>
                                                    <div className='by'>{place.by}</div>
                                                    <div className='price '>
                                                        <span>{place.price}</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            )
                            :
                            <div className='d-flex justify-content-center'>
                                <div className="loader"></div>
                            </div>
                    }
                </Row>
            </div>
        </section>
    )
}

export default TripIdeas
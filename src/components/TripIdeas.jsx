import { useState } from 'react';
import cityOne from "../assets/cities/alex.png"
import cityTwo from "../assets/cities/dahab.png"
import cityThree from "../assets/cities/sharm.png"
import { Row, Col, Card } from "react-bootstrap"

const TripIdeas = () => {

    const [activeButton, setActiveButton] = useState('');
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    let buttons_data = ['Romantic', 'Nature', 'Family-friendly', 'BackPacking', 'Beach', 'Cultural', 'Summer Special']

    let places = [
        {
            city: 'Sharm Elsheikh',
            by: 'flight',
            price: 2500,
            image: cityOne
        },
        {
            city: 'Dahab',
            by: 'bus',
            price: 250,
            image: cityTwo
        },
        {
            city: 'Alexandria',
            by: 'bus',
            price: 250,
            image: cityThree
        },
        {
            city: 'Dahab',
            by: 'bus',
            price: 250,
            image: cityTwo
        },
        {
            city: 'Alexandria',
            by: 'bus',
            price: 250,
            image: cityThree
        },
        {
            city: 'Sharm Elsheikh',
            by: 'flight',
            price: 2500,
            image: cityOne
        },{
            city: 'Dahab',
            by: 'bus',
            price: 250,
            image: cityTwo
        },
        {
            city: 'Alexandria',
            by: 'bus',
            price: 250,
            image: cityThree
        },
        {
            city: 'Dahab',
            by: 'bus',
            price: 250,
            image: cityTwo
        }
    ]
    return (
        <section>
            <h3>Trip Ideas from Cairo</h3>
            <div className="filters">
                {
                    buttons_data.map((btn, index) =>
                        <button
                            className={`secondary_btn ${activeButton === btn ? 'active' : ''}`}
                            onClick={() => handleButtonClick(btn)}
                            key={index}>{btn}</button>
                    )
                }
            </div>
            <div className="trips_container">
                <Row className='m-4'>
                    {
                        places.map(place =>
                            <Col key={Math.random()} sm="12" md="4" className='p-2'>
                                <Card className="d-flex flex-row h-100">
                                    <div className="image_container">
                                        <img src={place.image} className='img-fluid' alt="..." />
                                    </div>
                                    <div className="description flex-grow-1">
                                        <h4>{place.city}</h4>
                                        <div className='by'>{place.by}</div>
                                        <div className='price '>
                                            <span>EGP</span>
                                            <span>{place.price}</span>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        </section>
    )
}

export default TripIdeas
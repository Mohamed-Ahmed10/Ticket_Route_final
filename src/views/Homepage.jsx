import { Container, Row, Col, Card } from "react-bootstrap";
import train_image from "../assets/home/train.jpg"
import airplane_image from "../assets/home/airplane.webp"
import bus_image from "../assets/home/bus.jpg"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Homepage() {
    let { t } = useTranslation()
    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Card className="h-100" >
                        <Card.Img variant="top" src={train_image} />
                        <Card.Body>
                            <Card.Title>{t('train')}</Card.Title>
                            <Link to="/train" className="btn btn-primary stretched-link">Go somewhere</Link>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100" >
                        <Card.Img variant="top" src={bus_image} />
                        <Card.Body>
                            <Card.Title>{t('bus')}</Card.Title>
                            <Link to="/bus" className="btn btn-primary stretched-link">Go somewhere</Link>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100" >
                        <Card.Img variant="top" src={airplane_image} />
                        <Card.Body>
                            <Card.Title>{t('airplane')}</Card.Title>
                            <Link to="/airplane" className="btn btn-primary stretched-link">Go somewhere</Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

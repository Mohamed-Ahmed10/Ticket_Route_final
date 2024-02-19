import { Row, Col } from "react-bootstrap"
import egyptian_railway from "../assets/partners/railway.png"
import egypt_air from "../assets/partners/egypt_Air.png"
import elnil from "../assets/partners/el_nil.png"
import emirates from "../assets/partners/emirates.png"
import fast_bus from "../assets/partners/fast_bus.png"
import go_bus from "../assets/partners/go_bus.png"
import saudi from "../assets/partners/saudia.png"
import swvl from "../assets/partners/swvl.png"
export default function Partners() {
    return (
        <>
            <Row className="align-items-center gx-4">
                <Col md="4" sm="12">
                    <h3>Popular Partners in Egypt</h3>
                    <p className="light">Book cheap trips on out partnats and you’re ready to go </p>
                </Col>
                <Col md="2" sm="6" className="text-center">
                    <img src={egyptian_railway} className="m-1 w-50 my-2" alt="Partner image" />
                    <img src={egypt_air} className="m-1 w-50 my-2" alt="Partner image" />
                </Col>
                <Col md="2" sm="6" className="text-center">
                    <img src={elnil} className="m-1 w-50 my-2" alt="Partner image" />
                    <img src={emirates} className="m-1 w-50 my-2" alt="Partner image" />
                </Col>
                <Col md="2" sm="6" className="text-center">
                    <img src={fast_bus} className="m-1 w-50 my-2" alt="Partner image" />
                    <img src={go_bus} className="m-1 w-50 my-2" alt="Partner image" />
                </Col>
                <Col md="2" sm="6" className="text-center">
                    <img src={saudi} className="m-1 w-50 my-2" alt="Partner image" />
                    <img src={swvl} className="m-1 w-50 my-2" alt="Partner image" />
                </Col>
            </Row>
        </>
    )
}

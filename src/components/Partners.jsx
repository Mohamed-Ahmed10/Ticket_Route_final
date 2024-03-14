/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap"
import egyptian_railway from "../assets/partners/railway.png"
import egypt_air from "../assets/partners/egypt_Air.png"
import elnil from "../assets/partners/el_nil.png"
import emirates from "../assets/partners/emirates.png"
import east_bus from "../assets/partners/east_bus.png"
import go_bus from "../assets/partners/go_bus.png"
import saudi from "../assets/partners/saudia.png"
import swvl from "../assets/partners/swvl.png"
import { useTranslation } from "react-i18next"
export default function Partners({ trip_status }) {
    let { t } = useTranslation()

    let partners_data = [
        {
            logo: egyptian_railway,
            topic: "train"
        },
        {
            logo: egypt_air,
            topic: "flight"
        },
        {
            logo: elnil,
            topic: "flight"
        },
        {
            logo: emirates,
            topic: "flight"
        },
        {
            logo: east_bus,
            topic: "bus"
        },
        {
            logo: go_bus,
            topic: "bus"
        },
        {
            logo: saudi,
            topic: "flight"
        },
        {
            logo: swvl,
            topic: "bus"
        }
    ]
    return (
        <div className="partners my-4">
            <Row className="align-items-center gx-4">
                <Col md="4" sm="12">
                    <h3>{t("partners")}</h3>
                    <p className="light">{t("partners_desc")}</p>
                </Col>
                {
                    partners_data.map(partner =>
                        partner.topic === trip_status &&
                        <Col key={Math.random()} md="2" sm="6" className="d-flex justify-content-around">
                            <img src={partner.logo} className="m-1 w-50 my-2" alt="Partner image" />
                        </Col>
                    )
                }
            </Row>
        </div>
    )
}

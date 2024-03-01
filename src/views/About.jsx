import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import aboutImage from "../assets/about.jpg";
import { FaQuoteRight } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiSummits } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { LuHeartHandshake } from "react-icons/lu";



export default function About() {
    let { t } = useTranslation()
    return (
        <Container>
            <div className="about_hero">
                <div className="background_box"></div>
                <Row className="about_intro">
                    <Col>
                        <img src={aboutImage} className="w-75 mt-4 rounded-4 img-fluid" alt="image" />
                    </Col>
                    <Col>
                        <h2 className="mb-4 hero_intro">{t("about_heading")}</h2>
                        <p className="mt-4">{t("about_desc")}</p>
                    </Col>
                </Row>
                <div>
                    <h2 className="mb-4">{t("why_us")}</h2>
                    <p>{t("why_desc")}</p>
                </div>
                <Row>
                    <Col md={6} className="pe-4">
                        <h2 className="mb-4">{t("our_mission")}</h2>
                        <p>{t("mission_desc")}</p>
                        <div className="quote">
                            <FaQuoteRight />
                            <p className="py-2">{t("quote")}</p>
                            <div className="text-end">{t("quote_author")}</div>
                        </div>
                    </Col>
                    <Col md={6} className="values ps-4">
                        <h2 className="mb-4">{t("core_values")}</h2>
                        <div className="d-flex align-content-center">
                            <div className="flex-shrink-0 pt-2">
                                <GiCommercialAirplane className="m-3"/>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>{t("value1")}</h5>
                                <p>{t("value1_desc")}</p>
                            </div>
                        </div>
                        <div className="d-flex align-content-center">
                            <div className="flex-shrink-0 pt-2">
                                <GiSummits className="m-3"/>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>{t("value2")}</h5>
                                <p>{t("value2_desc")}</p>
                            </div>
                        </div>
                        <div className="d-flex align-content-center">
                            <div className="flex-shrink-0 pt-2">
                                <BiWorld className="m-3"/>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>{t("value3")}</h5>
                                <p>{t("value3_desc")}</p>
                            </div>
                        </div>
                        <div className="d-flex align-content-center">
                            <div className="flex-shrink-0 pt-2">
                                <LuHeartHandshake className="m-3"/>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>{t("value4")}</h5>
                                <p>{t("value4_desc")}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}



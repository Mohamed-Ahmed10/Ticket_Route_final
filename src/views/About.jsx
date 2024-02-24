import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import aboutImage from "../assets/about.png";
import { FaQuoteRight } from "react-icons/fa";


export default function About() {
    let { t } = useTranslation()
    return (
        <Container>
            <div className="about_hero">

                <div className="background_box"></div>
                <Row className="about_intro">
                    <Col>
                        <img src={aboutImage} className="w-75 mt-4" alt="image" />
                    </Col>
                    <Col>
                        <h2 className="mb-4 hero_intro">{t("about_heading")}</h2>
                        <p className="mt-4">{t("about_desc")}</p>
                    </Col>
                </Row>

                <div>
                    <h2>{t("why_us")}</h2>
                    <p>{t("why_desc")} {t("why_desc2")} {t("why_desc3")}</p>
                </div>
                <div className="my-4">
                    <h2>{t("our_mission")}</h2>
                    <p>{t("mission_desc")}</p>
                </div>
                <div className="quote">
                    <FaQuoteRight />
                    <p className="py-2">{t("quote")}</p>
                    <div className="text-end">{t("quote_author")}</div>
                </div>
            </div>
        </Container>
    )
}



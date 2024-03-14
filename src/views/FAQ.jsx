import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
    const { t } = useTranslation()
    const reservationQuestionsAndAnswers = [
        {
            question: t("question1"),
            answer: t("answer1")
        },
        {
            question: t("question2"),
            answer: t("answer2")
        },
        {
            question: t("question3"),
            answer: t("answer3")
        }
    ];

    return (
        <div className="vh-100">
            <Accordion defaultActiveKey="0" className="w-75 mx-auto my-4">
                {reservationQuestionsAndAnswers.map((question, index) =>
                    <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{question.question}</Accordion.Header>
                        <Accordion.Body>{question.answer}</Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </div>
    )
}

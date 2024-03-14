
import { Container, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Swal from 'sweetalert2'
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Contact() {

    let navigate = useNavigate()

    let { t } = useTranslation()
    const [validated, setValidated] = useState(false);

    let handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Signed in successfully"
        });
        setTimeout(() =>
            navigate("/")
            , 2000)
    }
    return (
        <Container>
            <h1 className="mt-3 text-center">{t("contact_us")}</h1>
            <Form className="my-3 w-50 mx-auto" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{t("name")}</Form.Label>
                    <Form.Control required type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{t("email")}</Form.Label>
                    <Form.Control required type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{t("message")}</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
                </Form.Group>
                <button className="primary_btn">{t("send")}</button>
            </Form>

            <div className="py-3 d-flex justify-content-evenly">
                <div className="d-flex align-items-start">
                    <IoMdMail style={{ fontSize: '30px', color: '#2582c0', width: "1.24rem" }} />
                    <p className="px-3">{t("mail_us")}<a href="#">tickets-route@email.com</a>
                    </p>
                </div>
                <div className="d-flex align-items-start">
                    <FaPhoneAlt style={{ fontSize: '30px', color: '#2582c0', width: "1.24rem" }} />
                    <p className="px-3">{t("call_us")}<a href="#">1-800-123-4567</a>
                    </p>
                </div>
            </div>
        </Container>
    )
}

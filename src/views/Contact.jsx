
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
    // eslint-disable-next-line no-unused-vars
    const [validated, setValidated] = useState(false);
    let localData = localStorage.getItem("data") ? localStorage.getItem("data") : "[]"

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    let handleData = (ev) => {
        setData({ ...data, [ev.target.name]: ev.target.value })
    }

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
            title: t('sign_up')
        });
        setTimeout(() =>
            navigate("/")
            , 2000)
        let totalData = JSON.parse(localData);
        totalData = [...totalData, data];
        console.log(totalData)
        localStorage.setItem("data", JSON.stringify(totalData))
    }
    return (
        <Container>
            <h1 className="mt-3 text-center">{t("contact_us")}</h1>
            <Form className="my-3 w-50 mx-auto" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{t("name")}</Form.Label>
                    <Form.Control onChange={handleData} name="name" required type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{t("email")}</Form.Label>
                    <Form.Control onChange={handleData} name="email" required type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{t("message")}</Form.Label>
                    <Form.Control onChange={handleData} name="message" required as="textarea" rows={3} />
                </Form.Group>
                <button className="primary_btn">{t("send")}</button>
            </Form>

            <div className="py-3 d-flex justify-content-evenly">
                <div className="d-flex align-items-start">
                    <IoMdMail style={{ fontSize: '30px', color: '#2582c0', width: "1.24rem" }} />
                    <p className="px-3"><span className="mx-2">{t("mail_us")}</span><a href="#">tickets-route@email.com</a>
                    </p>
                </div>
                <div className="d-flex align-items-start">
                    <FaPhoneAlt style={{ fontSize: '30px', color: '#2582c0', width: "1.24rem" }} />
                    <p className="px-3"><span className="mx-2">{t("call_us")}</span><a href="#">1-800-123-4567</a>
                    </p>
                </div>
            </div>
        </Container>
    )
}


import { Container, Form } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contact() {


    return (
        <Container>
            <h1 className="mt-3">Contact Us</h1>

            <Form className="my-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button className="primary_btn">
                    Submit
                </button>
            </Form>
            <div className="py-3 d-flex justify-content-evenly">
                <div className="d-flex align-items-start">
                    <IoMdMail style={{ fontSize: '30px', color: '#2582c0' }} />
                    <p className="ps-3"> Mail Us <a href="#">tickets-route@email.com</a>
                    </p>
                </div>
                <div className="d-flex align-items-start">
                    <FaPhoneAlt style={{ fontSize: '30px', color: '#2582c0' }} />
                    <p className="ps-3">Call Us <a href="#">1-800-123-4567</a>
                    </p>
                </div>

            </div>

        </Container>
    )
}

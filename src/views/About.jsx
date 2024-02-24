import { Container } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function About() {
    return (
        <Container>
            <div className="my-3">
                <h1>About Us</h1>
                <p>Welcome to our ticket booking company!</p>
                <p>
                    We strive to provide you with the best ticket booking experience for all your travel needs.
                </p>
                <h2>Our Mission</h2>
                <p>
                    Our mission is to make traveling easier and more convenient for everyone by offering a seamless ticket booking platform.
                </p>
                <h2>Our Team</h2>
                <p>
                    Meet our dedicated team of professionals who work tirelessly to ensure your satisfaction:
                </p>
                <ul>
                    <li>John Doe - CEO</li>
                    <li>Jane Smith - Head of Operations</li>
                    <li>Michael Johnson - Customer Support Manager</li>
                    {/* Add more team members as needed */}
                </ul>
                <p>If you have any questions or concerns, feel free to contact us:</p>
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
            </div>
        </Container>
    )
}

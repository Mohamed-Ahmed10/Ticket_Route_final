import { useTranslation } from "react-i18next"
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import icon_transparent from "../assets/logo/icon_transparent.png"
export default function SiteNav() {

    let { t } = useTranslation()
    return (
        <div>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={icon_transparent} alt="Icon" style={{ width: '50px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0">
                            <Nav.Link href="#action1">{t('home')}</Nav.Link>
                            <Nav.Link href="#action2">{t('about_us')}</Nav.Link>
                            <Nav.Link href="#action2">{t('contact_us')}</Nav.Link>
                            <Nav.Link href="#action2">{t('faq')}</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

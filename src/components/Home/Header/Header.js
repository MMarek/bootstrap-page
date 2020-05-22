import React, {Component} from "react";
import {Nav, Navbar, NavDropdown, Container, Row, Col, Image, Jumbotron, Button, Modal} from "react-bootstrap";
import bootstrap from '../../../assets/bootstrap.png';

class Header extends Component {

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#">O co chodzi?</Nav.Link>
                            <NavDropdown title="Co zawiera" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#navbars">Navbars</NavDropdown.Item>
                                <NavDropdown.Item href="#buttons">Buttons</NavDropdown.Item>
                                <NavDropdown.Item href="#cards">Cards</NavDropdown.Item>
                                <NavDropdown.Item href="#alerts">Alerts</NavDropdown.Item>
                                <NavDropdown.Item href="#carousels">Carousels</NavDropdown.Item>
                                <NavDropdown.Item href="#badges">Badges</NavDropdown.Item>
                                <NavDropdown.Item href="#forms">Forms</NavDropdown.Item>
                                <NavDropdown.Item href="#tooltips">Tooltips</NavDropdown.Item>
                                <NavDropdown.Item href="#progres">Progres-bars</NavDropdown.Item>
                                <NavDropdown.Item href="#spinners">Spinners</NavDropdown.Item>
                                <NavDropdown.Item href="#tables">Tables</NavDropdown.Item>
                                <NavDropdown.Item href="#tabs">Tabs/Zakładki</NavDropdown.Item>
                                <NavDropdown.Item href="#ultilities">Ultilities</NavDropdown.Item>
                                <NavDropdown.Item href="#dropdowns">Dropdowns</NavDropdown.Item>
                                <NavDropdown.Item href="#modals">Modals</NavDropdown.Item>
                                {/*<NavDropdown.Divider />*/}
                                {/*<NavDropdown.Item href="#">Separated link</NavDropdown.Item>*/}
                            </NavDropdown>
                            <Nav.Link href="#">Informacje</Nav.Link>
                            <Nav.Link href="#">Dodatki</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#">Zbyteczne informacje</Nav.Link>
                            <Nav.Link eventKey={2} href="#">
                                O mnie
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <Jumbotron>
                    <h1>O co chodzi?</h1>
                    <p>
                        Cała strona stworzona przy użyciu bootstrapa, w celach edukacyjnych.
                    </p>
                    <p>
                        <BlueBtn/>
                    </p>
                </Jumbotron>

            </>
        )
    }
}

export default Header;


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Niebieski guzik </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Nagłówek treści</h4>
                <p>
                    Modal z nagłówkiem, treścią i zestawem akcji w stopce. </p>
                Poziomy, wycentrowany i animowany.
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function BlueBtn() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Niebieski guzik :) </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
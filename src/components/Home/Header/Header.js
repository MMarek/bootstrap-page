import React, {Component} from "react";
import {Nav, Navbar, NavDropdown, Container, Row, Col, Image, Jumbotron, Button} from "react-bootstrap";
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
                        <Button variant="primary">Niebieski guzik</Button>
                    </p>
                </Jumbotron>

            </>
        )
    }
}

export default Header;
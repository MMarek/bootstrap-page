import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";

class Footer extends Component {

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#">Stopka :)</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav.Link href="#">Kontakt</Nav.Link>
                        <Nav.Link href="#">Dodatki</Nav.Link>

                        <Nav>
                            <Nav.Link href="#">Jakieś informacje</Nav.Link>
                            <Nav.Link eventKey={2} href="#">
                                itd.
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </>
        )
    }
}

export default Footer;
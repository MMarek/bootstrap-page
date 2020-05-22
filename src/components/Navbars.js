import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup, Container} from 'react-bootstrap'


function Navbars() {

    return (
        <header className='block'>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            <br/>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

            <br />

            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>

            <br />

            <Navbar bg="light" variant="light">
                <Navbar.Brand href="">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>

            <br />

            <Navbar>
                <Navbar.Brand href="">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

            <br />

            <Navbar className="bg-light justify-content-between">
                <Form inline>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Form>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit">Submit</Button>
                </Form>
            </Navbar>

            <br />

            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="">Navbar in Container - centers navbar</Navbar.Brand>
                </Navbar>
            </Container>

            <br />

            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="">Container inside Navbar</Navbar.Brand>
                </Container>
            </Navbar>

            <br />

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Features</Nav.Link>
                        <Nav.Link href="#">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
<br/>
            <Button className='navBtn' href="/" variant="outline-danger" size='md' block>Back to main-page</Button>

        </header>
);
}

export default Navbars;
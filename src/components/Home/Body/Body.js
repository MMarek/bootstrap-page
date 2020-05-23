import React, {Component, useState} from "react";
import {
    Alert, Badge,
    Button,
    Card,
    CardColumns, Carousel,
    Collapse,
    Dropdown,
    Form,
    Col, ProgressBar, Row, Toast, Table, Spinner
    // InputGroup, Row
    // Image,
    // ToggleButton,
    // ToggleButtonGroup
} from 'react-bootstrap';

function Example() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Naciśnij
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    Poniżej znajdujemy, zestaw kart/kontenerów,
                    guzików przenoszących do podstron z konkretnymi
                    zawartościami..
                    Elementy te mają pokazać funkcjonalność i w poglądowy sposób przybliżyć Bootstrapa.
                </div>
            </Collapse>
        </>
    );
}

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function Tabs() {
    const [show, setShow] = useState(false);

    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>teraz</small>
                    </Toast.Header>
                    <Toast.Body>Właśnie czytasz zawartość, Tabsa :)</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button onClick={() => setShow(true)}>Tabs</Button>
            </Col>
        </Row>
    );
}


class Body extends Component {

    render() {
        return (
            <>

                <Card className="text-center">
                    <Card.Body>
                        <Example/>
                    </Card.Body>
                </Card>

                <br/>

                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src=""/>
                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-3">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src=""/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card bg="primary" text="white" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src=""/>
                    </Card>
                    <Card className="text-right">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>

                <br/>
                <br/>

                <h4>
                    Przykład <Badge variant="secondary">Alertu:</Badge>
                </h4>

                <br/>

                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                    <hr/>
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>
                </Alert>

                <br/>
                <br/>

                <Button href="#navbars" variant="primary" size="lg" block>
                    Navbars </Button>
                <Button href="#buttons" variant="secondary" size="lg" block>
                    Buttons </Button>
                <Button href="#cards" variant="success" size="lg" block>
                    Cards </Button>
                <Button href="#alerts" variant="warning" size="lg" block>
                    Alerts </Button>
                <Button href="#carousels" variant="danger" size="lg" block>
                    Carousels </Button>
                <Button href="#badges" variant="info" size="lg" block>
                    Badges </Button>

                <br/>
                <br/>
                <br/>

                <ControlledCarousel/>

                <br/>
                <br/>
                <br/>

                <div className='buttons'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Forms
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#forms">Forms</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>{' '}
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Progres-bars
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#progres">Progres-bars</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>{' '}

                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Tooltips
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#tooltips">Tooltips</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>{' '}

                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Spinners
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#spinners">Spinners</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>{' '}

                    </Dropdown>
                    <Dropdown>

                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Tables
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#tables">Tables</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>{' '}
                    </Dropdown>
                </div>

                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>

                <div className='buttons'>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Tabs
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#tabs">Tabs</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>{' '}
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Ultilities
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#ultilities">Ultilities</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>{' '}
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Dropdowns
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#dropdowns">Dropdowns</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>{' '}
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Modals
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#modals">Modals</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='badge-info m-2 p-3'>
                    <h1 className='texts'>Animowany pasek:</h1>
                    <ProgressBar animated now={45}/>
                </div>

                <br/>
                <br/>
                <br/>

                <div className='badge-light m-2 p-3'>
                    <h3 className='texts'>Tabela:</h3>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>


                <br/>
                <br/>

                <div className='badge-info m-2 p-3'>
                    <h1 className='texts'>Przykładowy Tabs:</h1>
                    <Tabs/>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className='buttons'>

                    <h3 className='texts'>Formularz:</h3>

                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St"/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor"/>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" value="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

                <br/>
                <br/>
                <br/>


                <br/>
                <br/>


                <div className='buttons'>

                </div>
                <div className='text-right'>
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Loading...</span>
                    </Button>{' '}
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                </div>
            </>
        )
    }
}

export default Body;


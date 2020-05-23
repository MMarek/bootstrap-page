import React, {Component, useState} from "react";
import {Button, Card, CardColumns, Collapse, Dropdown, Image, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

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
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Tabs
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#tabs">Tabs</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>{' '}
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Ultilities
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#ultilities">Ultilities</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>{' '}
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdowns
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#dropdowns">Dropdowns</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>{' '}
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Modals
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                            <Dropdown.Item href="#modals">Modals</Dropdown.Item>
                            <Dropdown.Item href="#">...</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>


            </>)
    }
}

export default Body;


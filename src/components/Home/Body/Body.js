import React, {Component, useState} from "react";
import {Button, Card, CardColumns, Collapse, Image, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

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

                <h5>Guziki:</h5>

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



                {/*<ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">*/}
                {/*    <ToggleButton value={1}> Forms (pre-checked)</ToggleButton>*/}
                {/*    <ToggleButton value={2}>Tooltips 2</ToggleButton>*/}
                {/*    <ToggleButton value={3}>Progres-bars 3 (pre-checked)</ToggleButton>*/}
                {/*</ToggleButtonGroup>*/}



                <Button href="#forms" variant="light" size="lg" block>
                    Forms </Button>
                <Button href="#tooltips" variant="dark" size="lg" block>
                    Tooltips </Button>

                <Button href="#progres" variant="info" size="lg" block>
                    Progres-bars </Button>
                <Button href="#spinners" variant="danger" size="lg" block>
                    Spinners </Button>
                <Button href="#tables" variant="warning" size="lg" block>
                    Tables </Button>
                <Button href="#tabs" variant="success" size="lg" block>
                    Tabs </Button>
                <Button href="#ultilities" variant="secondary" size="lg" block>
                    Ultilities </Button>
                <Button href="#dropdowns" variant="primary" size="lg" block>
                    Dropdowns </Button>
                <Button href="#modals" variant="light" size="lg" block>
                    Modals </Button>

            </>)
    }
}

export default Body;


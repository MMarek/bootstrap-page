import React from "react";
import {
    Form,
    Button,
    Row,
    Col
}
    from 'react-bootstrap';

function Forms() {
    return (
        <div className='block modalsContainers'>
            <Form>
                <h3 className='texts'>Formularze - propozycje:</h3>

                <br/>

                <h3 className='texts'>1:</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <br/>

            <div className='text-right'>
                <h3 className='texts'>2:</h3>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Example multiple select</Form.Label>
                        <Form.Control as="select" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>
                </Form>
            </div>

            <br/>

            <h3 className='texts'>Zakres wejścia:</h3>
            <Form>
                <Form.Group controlId="formBasicRange">
                    <Form.Label>Range</Form.Label>
                    <Form.Control type="range"/>
                </Form.Group>
            </Form>

            <br/>

            <h3 className='texts'>Check-box:</h3>
            <Form>
                {['checkbox', 'radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                        />

                        <Form.Check
                            disabled
                            type={type}
                            label={`disabled ${type}`}
                            id={`disabled-default-${type}`}
                        />
                    </div>
                ))}
            </Form>

            <br/>

            <h3 className='texts'>Bez oznaczenia:</h3>
            <>
                <Form.Check aria-label="option 1"/>
                <Form.Check type="radio" aria-label="radio 1"/>
            </>

            <br/>

            <h3 className='texts'>Przełączniki:</h3>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Check this switch"
                />
                <Form.Check
                    disabled
                    type="switch"
                    label="disabled switch"
                    id="disabled-custom-switch"
                />
            </Form>

            <br/>

            <h3 className='texts'>Różne rozmiary + wybór:</h3>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>Custom select Small</Form.Label>
                    <Form.Control as="select" size="sm" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Custom select Large</Form.Label>
                    <Form.Control as="select" size="lg" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Form>

            <br/>

            <h3 className='texts'>8:</h3>
            <>
                <Form.Check aria-label="option 1"/>
                <Form.Check type="radio" aria-label="radio 1"/>
            </>

            <br/>

            <h3 className='texts'>9:</h3>
            <Form>
                {['checkbox', 'radio'].map((type) => (
                    <div key={type} className="mb-3">
                        <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid/>
                            <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                            <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                        </Form.Check>
                    </div>
                ))}
            </Form>

            <br/>

            <h3 className='texts'>10:</h3>
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="First name"/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name"/>
                    </Col>
                </Row>
            </Form>

            <br/>

            <h3 className='texts'>11:</h3>
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

            <br/>

            <h3 className='texts'>12:</h3>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password"/>
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Radios
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="first radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="second radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="third radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{span: 10, offset: 2}}>
                        <Form.Check label="Remember me"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{span: 10, offset: 2}}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>

            <br/>
            <br/>

            <Button className='navBtn' href="/" variant="outline-danger" size='md' block>Back to main-page</Button>

        </div>

    )
}

export default Forms
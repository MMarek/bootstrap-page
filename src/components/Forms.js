import React from "react";
import {Form, Button} from 'react-bootstrap';

function Forms() {
return(
    <>
        <Form>
            <h3>1:</h3>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        <h3>2:</h3>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
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
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
        </Form>

        <h3>Zakres wejścia:</h3>
        <Form>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
                <Form.Control type="range" />
            </Form.Group>
        </Form>

        <h3>Check-box:</h3>
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

        <h3>Bez oznaczenia:</h3>
        <>
            <Form.Check aria-label="option 1" />
            <Form.Check type="radio" aria-label="radio 1" />
        </>

        <h3>Przełączniki:</h3>
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

        <h3>Różne rozmiary + wybór:</h3>
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
    </>

)
}

export default Forms
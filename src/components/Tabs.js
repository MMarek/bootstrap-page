import React, {useState} from "react";
import {Toast, Row, Col, Button} from 'react-bootstrap';


function Example() {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return (
        <Row>
            <Col xs={6}>
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button onClick={toggleShowA}>
                    Toggle Toast <strong>with</strong> Animation
                </Button>
            </Col>
            <Col xs={6} className="my-1">
                <Toast onClose={toggleShowB} show={showB} animation={false}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button onClick={toggleShowB}>
                    Toggle Toast <strong>without</strong> Animation
                </Button>
            </Col>
        </Row>
    );
}


function Example2() {
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
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button onClick={() => setShow(true)}>Show Toast</Button>
            </Col>
        </Row>
    );
}


function Tabs() {
    return (
        <div className='block'>
            <h3 className='texts'>Zakładki:</h3>
            <h3 className='texts'>1:</h3>
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>

            <h3 className='texts'>2:</h3>
            <Example/>

            <h3 className='texts'>3:</h3>
            <>
                <Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>See? Just like this.</Toast.Body>
                </Toast>
                <Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>2 seconds ago</small>
                    </Toast.Header>
                    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                </Toast>
            </>

            <h3 className='texts'>4:</h3>
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'relative',
                    minHeight: '100px',
                }}
            >
                <Toast
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                >
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>See? Just like this.</Toast.Body>
                </Toast>
            </div>

            <h3 className='texts'>5:</h3>
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'relative',
                    minHeight: '200px',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                >
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>just now</small>
                        </Toast.Header>
                        <Toast.Body>See? Just like this.</Toast.Body>
                    </Toast>
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>2 seconds ago</small>
                        </Toast.Header>
                        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                    </Toast>
                </div>
            </div>

            <h3 className='texts'>6:</h3>
            <Example2/>

            <br/>
            <br/>

            <Button className='navBtn' href="/" variant="outline-danger" size='md' block>Back to main-page</Button>

        </div>
    )
}

export default Tabs;

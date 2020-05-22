import React, {useState} from "react";
import {Modal, Button, Container, Row, Col} from 'react-bootstrap';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Zwykły modal z animacją </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function Example2() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Zwykły modal </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

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
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Cantralny Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Example3() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Uruchom modal wyśrodkowany pionowo
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Użyj Grida w Modalu </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <code>.col-xs-12 .col-md-8</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Example4() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Uruchom modal z gridem </Button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    );
}

function Example5() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button onClick={() => setSmShow(true)}>Mały modal</Button>{' '}
            <Button onClick={() => setLgShow(true)}>Duży modal</Button>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Mały Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Duży Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    );
}

function Example6() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Niestandardowe stylowanie modala
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Niestandardowe stylowanie modala
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}


function Modals() {
    return (
        <>
            <header className='modalsContainers'>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>

                <br/>
                <Example/>

                <br/>
                <Example2/>

                <br/>
                <Example3/>

                <br/>
                <Example4/>

                <br/>
                <Example5/>

                <br/>
                <Example6/>

                <br/>
                <Button href="/" variant="danger">Powrót na stroną główną</Button>


            </header>

        </>
    )
}

export default Modals
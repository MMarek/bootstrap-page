import React from "react";
import {Spinner, Button} from "react-bootstrap";

function Spinners() {
    return (
        <div className='block'>
            <h3 className='texts'>Spinners:</h3>
            <div className='text-left'>
                <h3 className='texts'>1:</h3>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>

            <div className='text-center'>
                <h3 className='texts'>2:</h3>
                <Spinner animation="grow"/>
                <Spinner animation="border"/>
            </div>

<br/>

            <div className='text-center'>
                <h3 className='texts'>3:</h3>
                <Spinner animation="border" variant="primary"/>{' '}
                <Spinner animation="border" variant="secondary"/>{' '}
                <Spinner animation="border" variant="success"/>{' '}

                <br/>

                <Spinner animation="border" variant="danger"/>{' '}
                <Spinner animation="border" variant="warning"/>{' '}
                <Spinner animation="border" variant="info"/>{' '}
                <Spinner animation="border" variant="light"/>{' '}
                <Spinner animation="border" variant="dark"/>{' '}

                <br/>

                <Spinner animation="grow" variant="primary"/>{' '}
                <Spinner animation="grow" variant="secondary"/>{' '}

                <br/>

                <Spinner animation="grow" variant="success"/>{' '}
                <Spinner animation="grow" variant="danger"/>{' '}
                <Spinner animation="grow" variant="warning"/>{' '}

                <br/>

                <Spinner animation="grow" variant="info"/>{' '}
                <Spinner animation="grow" variant="light"/>{' '}

                <br/>

                <Spinner animation="grow" variant="dark"/>
            </div>


            <>
                <h3 className='texts'>5:</h3>
                <Spinner animation="border" size="sm"/>
                <Spinner animation="border"/>{' '}
                <Spinner animation="grow" size="sm"/>
                <Spinner animation="grow"/>
            </>

            <br/>

            <div className='text-center'>
                <h3 className='texts'>6:</h3>
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

            <br/>
            <br/>

            <Button className='navBtn' href="/" variant="outline-danger" size='md' block>Back to main-page</Button>

        </div>

    )
}

export default Spinners;
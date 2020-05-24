import React from "react";
import {Badge, Button} from 'react-bootstrap';

function Badges() {
    return (

        <header className='badgesContainers block'>

            <div>
                <h3 className='texts'>Różne rozmiary:</h3>
                <h1>
                    Nagłówek h1 <Badge variant="secondary">New</Badge>
                </h1>
                <h2>
                    Nagłówek h2 <Badge variant="secondary">New</Badge>
                </h2>
                <h3>
                    Nagłówek h3 <Badge variant="secondary">New</Badge>
                </h3>
                <h4>
                    Nagłówek h4 <Badge variant="secondary">New</Badge>
                </h4>
                <h5>
                    Nagłówek h5 <Badge variant="secondary">New</Badge>
                </h5>
                <h6>
                    Nagłówek h6 <Badge variant="secondary">New</Badge>
                </h6>
            </div>

            <br/>

            <h3 className='texts'>W guziku:</h3>

            <Button variant="primary">
                Profile <Badge variant="light">9</Badge>
                <span className="sr-only">unread messages</span>
            </Button>

            <br/>

            <div>
                <h3 className='texts'>Różne kolory:</h3>

                <Badge variant="primary">Primary</Badge>{' '}
                <Badge variant="secondary">Secondary</Badge>{' '}
                <Badge variant="success">Success</Badge>{' '}
                <Badge variant="danger">Danger</Badge>{' '}
                <Badge variant="warning">Warning</Badge> <Badge variant="info">Info</Badge>{' '}
                <Badge variant="light">Light</Badge> <Badge variant="dark">Dark</Badge>
            </div>

            <div>
                <Badge pill variant="primary">
                    Primary
                </Badge>{' '}
                <Badge pill variant="secondary">
                    Secondary
                </Badge>{' '}
                <Badge pill variant="success">
                    Success
                </Badge>{' '}
                <Badge pill variant="danger">
                    Danger
                </Badge>{' '}
                <Badge pill variant="warning">
                    Warning
                </Badge>{' '}
                <Badge pill variant="info">
                    Info
                </Badge>{' '}
                <Badge pill variant="light">
                    Light
                </Badge>{' '}
                <Badge pill variant="dark">
                    Dark
                </Badge>
            </div>

            <br/>

            <Button className='navBtn' href="/" variant="outline-danger" size='md' block>Back to main-page</Button>

        </header>
    );
}

export default Badges;